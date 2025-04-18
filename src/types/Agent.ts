import { Policy } from './Policy.js';
import { Metrics } from './Metrics.js';

export interface Agent {
  id: string;
  name: string;
  type: string;
  capabilities: string[];
  status: 'active' | 'inactive';
  metrics: {
    responseTime: number;
    successRate: number;
    errorRate: number;
    totalRequests: number;
    lastActive: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface AgentConfig {
  name: string;
  type: string;
  version: string;
  createdAt: string;
  status: 'active' | 'inactive';
  capabilities: string[];
}

export interface AgentAction {
  id: string;
  timestamp: string;
  type: string;
  description: string;
  metadata: Record<string, any>;
  policyChecks: PolicyCheck[];
}

export interface PolicyCheck {
  policyId: string;
  result: boolean;
  reason?: string;
}

export interface AgentMetrics {
  actionsTotal: number;
  policyViolations: number;
  averageResponseTime: number;
  lastUpdated: string;
}

export interface AgentState {
  config: AgentConfig;
  currentPolicy: Policy;
  metrics: Metrics;
  lastAction?: AgentAction;
}
