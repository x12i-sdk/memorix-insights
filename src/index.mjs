import assert from 'node:assert/strict';
import { resolveCidrPathFacts } from '@x12i/memorix-insights';
const graph = { segments: [{ id: 'office', cidr: '192.0.2.0/24', zone: 'office' }, { id: 'dmz', cidr: '198.51.100.0/24', zone: 'dmz' }], edges: [{ from: 'office', to: 'dmz' }] };
const facts = resolveCidrPathFacts(graph, '192.0.2.0/24');
assert.equal(facts.resolved, true);
assert.equal(facts.originZone, 'office');
assert(facts.reachableZones.some(zone => zone.zoneName === 'dmz'));
assert.equal(resolveCidrPathFacts(graph, '203.0.113.0/24').resolved, false);
console.log(facts);
// The graph is supplied by this example; no network is scanned and no reachability probe is made.
