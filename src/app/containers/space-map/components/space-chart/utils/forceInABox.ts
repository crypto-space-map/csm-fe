/* eslint-disable max-lines */
import * as d3 from 'd3';

export default function forceInABox() {
  // d3 style
  function constant(_) {
    return () => _;
  }

  function index(d) {
    return d.index;
  }

  let id = index;
  let nodes = [];
  let links = []; // needed for the force version
  let tree;
  let size = [100, 100];
  let forceNodeSize = constant(1); // The expected node size used for computing the cluster node
  let forceCharge = constant(-1);
  let forceLinkDistance = constant(100);
  let forceLinkStrength = constant(0.1);
  let foci = {};
  // oldStart = force.start,
  let linkStrengthIntraCluster = 0.1;
  let linkStrengthInterCluster = 0.001;
  // oldGravity = force.gravity(),
  let templateNodes = [];
  let offset = [0, 0];
  let templateForce;
  let groupBy = function (d) {
    return d.cluster;
  };
  let template = 'treemap';
  let enableGrouping = true;
  let strength = 0.1;
  // showingTemplate = false;

  function force(alpha) {
    if (!enableGrouping) {
      return force;
    }
    if (templateForce && template === 'force') {
      // Do the tick of the template force and get the new focis
      templateForce.tick();
      getFocisFromTemplate();
    }

    for (let i = 0, n = nodes.length, node, k = alpha * strength; i < n; ++i) {
      node = nodes[i];
      node.vx += (foci[groupBy(node)].x - node.x) * k;
      node.vy += (foci[groupBy(node)].y - node.y) * k;
    }
  }

  function initialize() {
    if (!nodes) return;

    // let i,
    //     n = nodes.length,
    //     m = links.length,
    //     nodeById = map(nodes, id),
    //     link;

    if (template === 'treemap') {
      initializeWithTreemap();
    } else {
      initializeWithForce();
    }
  }

  force.initialize = function (_) {
    nodes = _;
    initialize();
  };

  function getLinkKey(l) {
    let sourceID = groupBy(l.source);
    let targetID = groupBy(l.target);

    return sourceID <= targetID ? `${sourceID}~${targetID}` : `${targetID}~${sourceID}`;
  }

  function computeClustersNodeCounts(nodes) {
    let clustersCounts = new Map();
    let tmpCount = {};

    nodes.forEach(d => {
      if (!clustersCounts.has(groupBy(d))) {
        clustersCounts.set(groupBy(d), { count: 0, sumforceNodeSize: 0 });
      }
    });

    nodes.forEach(d => {
      // if (!d.show) { return; }
      tmpCount = clustersCounts.get(groupBy(d));
      tmpCount.count += 1;
      tmpCount.sumforceNodeSize += Math.PI * (forceNodeSize(d) * forceNodeSize(d)) * 1.3;
      clustersCounts.set(groupBy(d), tmpCount);
    });
    return clustersCounts;
  }

  // Returns
  function computeClustersLinkCounts(links) {
    let dClusterLinks = new Map();
    let clusterLinks = [];

    links.forEach(l => {
      let key = getLinkKey(l);
      let count;
      if (dClusterLinks.has(key)) {
        count = dClusterLinks.get(key);
      } else {
        count = 0;
      }
      count += 1;
      dClusterLinks.set(key, count);
    });

    dClusterLinks.forEach((value, key) => {
      let source;
      let target;
      source = key.split('~')[0];
      target = key.split('~')[1];
      if (source !== undefined && target !== undefined) {
        clusterLinks.push({
          source,
          target,
          count: value,
        });
      }
    });
    return clusterLinks;
  }

  // Returns the metagraph of the clusters
  function getGroupsGraph() {
    let gnodes = [];
    let glinks = [];
    // edges = [],
    let dNodes = new Map();
    // totalSize = 0,
    let c;
    let i;
    let cc;
    let clustersCounts;
    let clustersLinks;

    clustersCounts = computeClustersNodeCounts(nodes);
    clustersLinks = computeClustersLinkCounts(links);

    for (c of clustersCounts.keys()) {
      cc = clustersCounts.get(c);
      gnodes.push({
        id: c,
        size: cc.count,
        r: Math.sqrt(cc.sumforceNodeSize / Math.PI),
      }); // Uses approx meta-node size
      dNodes.set(c, i);
      // totalSize += size;
    }

    clustersLinks.forEach(l => {
      let source = dNodes.get(l.source);
      let target = dNodes.get(l.target);
      if (source !== undefined && target !== undefined) {
        glinks.push({
          source,
          target,
          count: l.count,
        });
      } else {
        // console.log("Force in a box error, couldn"t find the link source or target on the list of nodes");
      }
    });

    return { nodes: gnodes, links: glinks };
  }

  function getGroupsTree() {
    let children = [];
    let c;
    let cc;
    let clustersCounts;

    clustersCounts = computeClustersNodeCounts(force.nodes());

    for (c of clustersCounts.keys()) {
      cc = clustersCounts.get(c);
      children.push({ id: c, size: cc.count });
    }
    return { id: 'clustersTree', children };
  }

  function getFocisFromTemplate() {
    // compute foci
    foci.none = { x: 0, y: 0 };
    templateNodes.forEach(d => {
      if (template === 'treemap') {
        foci[d.data.id] = {
          x: d.x0 + (d.x1 - d.x0) / 2 - offset[0],
          y: d.y0 + (d.y1 - d.y0) / 2 - offset[1],
        };
      } else {
        foci[d.id] = {
          x: d.x - offset[0],
          y: d.y - offset[1],
        };
      }
    });
    return foci;
  }

  function initializeWithTreemap() {
    let treemap = d3.treemap().size(force.size());

    tree = d3
      .hierarchy(getGroupsTree())
      .sum(d => d.size)
      .sort((a, b) => b.height - a.height || b.value - a.value);

    templateNodes = treemap(tree).leaves();
    getFocisFromTemplate();
  }

  function checkLinksAsObjects() {
    // Check if links come in the format of indexes instead of objects
    let linkCount = 0;
    if (nodes.length === 0) return;

    links.forEach(link => {
      let source;
      let target;
      if (!nodes) return;
      source = link.source;
      target = link.target;
      if (typeof link.source !== 'object') source = nodes[link.source];
      if (typeof link.target !== 'object') target = nodes[link.target];
      if (source === undefined || target === undefined) {
        // console.error(link);
        throw Error('Error setting links, couldnt find nodes for a link (see it on the console)');
      }
      link.source = source;
      link.target = target;
      link.index = linkCount++;
    });
  }

  function initializeWithForce() {
    let net;

    if (!nodes || !nodes.length) {
      return;
    }

    if (nodes && nodes.length > 0) {
      if (groupBy(nodes[0]) === undefined) {
        throw Error(
          "Couldnt find the grouping attribute for the nodes. Make sure to set it up with forceInABox.groupBy('clusterAttr') before calling .links()"
        );
      }
    }

    checkLinksAsObjects();

    net = getGroupsGraph();

    templateForce = d3
      .forceSimulation(net.nodes)
      .force('x', d3.forceX(size[0] / 2).strength(0.1))
      .force('y', d3.forceY(size[1] / 2).strength(0.25))
      .force('collide', d3.forceCollide(d => d.r).iterations(4))
      .force('charge', d3.forceManyBody().strength(forceCharge));

    templateNodes = templateForce.nodes();

    getFocisFromTemplate();
  }

  function drawTreemap(container) {
    container.selectAll('circle.cell').remove();
    container.selectAll('line.cell').remove();
    container
      .selectAll('rect.cell')
      .data(templateNodes)
      .enter()
      .append('svg:rect')
      .attr('class', 'cell')
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('width', d => d.x1 - d.x0)
      .attr('height', d => d.y1 - d.y0);
  }

  function drawGraph(container) {
    // Delete the treemap if any
    container.selectAll('rect.cell').remove();
    let templateLinksSel = container.selectAll('line.cell').data(templateForce.force('links').links());
    templateLinksSel
      .enter()
      .append('line')
      .attr('class', 'cell')
      .merge(templateLinksSel)
      .attr('x2', d => d.source.x)
      .attr('y2', d => d.source.y)
      .attr('x1', d => d.target.x)
      .attr('y1', d => d.target.y)
      .style('stroke-width', '1px')
      .style('stroke-opacity', '0.5');

    let templateNodesSel = container.selectAll('circle.cell').data(templateForce.nodes());
    templateNodesSel
      .enter()
      .append('svg:circle')
      .attr('class', 'cell')
      .merge(templateNodesSel)
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', d => d.r);

    templateForce
      .on('tick', () => {
        // console.log("tick");
        drawGraph(container);
      })
      .restart();

    templateNodesSel.exit().remove();
    templateLinksSel.exit().remove();
  }

  force.drawTemplate = function (container) {
    // showingTemplate = true;
    if (template === 'treemap') {
      drawTreemap(container);
    } else {
      drawGraph(container);
    }
    return force;
  };

  // Backwards compatibility
  force.drawTreemap = force.drawTemplate;

  force.deleteTemplate = function (container) {
    // showingTemplate = false;
    container.selectAll('.cell').remove();

    if (templateForce) {
      templateForce.on('tick', null).restart();
    }

    return force;
  };

  force.template = function (x) {
    if (!arguments.length) return template;
    template = x;
    initialize();
    return force;
  };

  force.groupBy = function (x) {
    if (!arguments.length) return groupBy;
    if (typeof x === 'string') {
      groupBy = function (d) {
        return d[x];
      };
      return force;
    }
    groupBy = x;
    return force;
  };

  force.enableGrouping = function (x) {
    if (!arguments.length) return enableGrouping;
    enableGrouping = x;
    // update();
    return force;
  };

  force.strength = function (x) {
    if (!arguments.length) return strength;
    strength = x;
    return force;
  };

  force.getLinkStrength = function (e) {
    if (enableGrouping) {
      if (groupBy(e.source) === groupBy(e.target)) {
        if (typeof linkStrengthIntraCluster === 'function') {
          return linkStrengthIntraCluster(e);
        }
        return linkStrengthIntraCluster;
      }
      if (typeof linkStrengthInterCluster === 'function') {
        return linkStrengthInterCluster(e);
      }
      return linkStrengthInterCluster;
    }
    // Not grouping return the intracluster
    if (typeof linkStrengthIntraCluster === 'function') {
      return linkStrengthIntraCluster(e);
    }
    return linkStrengthIntraCluster;
  };

  force.id = function (_) {
    return arguments.length ? ((id = _), force) : id;
  };

  force.size = function (_) {
    return arguments.length ? ((size = _), force) : size;
  };

  force.linkStrengthInterCluster = function (_) {
    return arguments.length ? ((linkStrengthInterCluster = _), force) : linkStrengthInterCluster;
  };

  force.linkStrengthIntraCluster = function (_) {
    return arguments.length ? ((linkStrengthIntraCluster = _), force) : linkStrengthIntraCluster;
  };

  force.nodes = function (_) {
    return arguments.length ? ((nodes = _), force) : nodes;
  };

  force.links = function (_) {
    if (!arguments.length) return links;
    if (_ === null) links = [];
    else links = _;
    initialize();
    return force;
  };

  force.forceNodeSize = function (_) {
    return arguments.length
      ? ((forceNodeSize = typeof _ === 'function' ? _ : constant(+_)), initialize(), force)
      : forceNodeSize;
  };

  // Legacy support
  force.nodeSize = force.forceNodeSize;

  force.forceCharge = function (_) {
    return arguments.length
      ? ((forceCharge = typeof _ === 'function' ? _ : constant(+_)), initialize(), force)
      : forceCharge;
  };

  force.forceLinkDistance = function (_) {
    return arguments.length
      ? ((forceLinkDistance = typeof _ === 'function' ? _ : constant(+_)), initialize(), force)
      : forceLinkDistance;
  };

  force.forceLinkStrength = function (_) {
    return arguments.length
      ? ((forceLinkStrength = typeof _ === 'function' ? _ : constant(+_)), initialize(), force)
      : forceLinkStrength;
  };

  force.offset = function (_) {
    return arguments.length ? ((offset = typeof _ === 'function' ? _ : constant(+_)), force) : offset;
  };

  force.getFocis = getFocisFromTemplate;

  return force;
}

// module.exports = forceInABox;
