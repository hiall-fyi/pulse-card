/**
 * Historic data storage for Pulse Card.
 * Stores time-series readings with configurable retention.
 */

class HistoryStore {
  constructor(maxEntries = 1000) {
    this.entries = [];
    this.maxEntries = maxEntries;
  }

  add(entry) {
    this.entries.push({
      ...entry,
      timestamp: Date.now(),
    });
    if (this.entries.length > this.maxEntries) {
      this.entries.shift();
    }
  }

  getRange(startMs, endMs) {
    return this.entries.filter(
      e => e.timestamp >= startMs && e.timestamp <= endMs
    );
  }

  getLatest(n = 50) {
    return this.entries.slice(-n);
  }

  getStats() {
    if (this.entries.length === 0) return null;
    const values = this.entries.map(e => e.value);
    return {
      count: values.length,
      min: Math.min(...values),
      max: Math.max(...values),
      avg: values.reduce((a,b)=>a+b,0)/values.length,
      latest: this.entries[this.entries.length-1],
    };
  }

  clear() { this.entries = []; }
  exportJSON() { return JSON.stringify(this.entries, null, 2); }
}

export default HistoryStore;