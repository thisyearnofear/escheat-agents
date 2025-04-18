import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import AgentTestPanel from './components/AgentTestPanel';
import PolicyManagement from './components/PolicyManagement';
import AuditLogs from './components/AuditLogs';
import './components/Dashboard.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Cognivern</h1>
        <nav className="main-nav">
          <button
            className={activeTab === 'dashboard' ? 'active' : ''}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={activeTab === 'agents' ? 'active' : ''}
            onClick={() => setActiveTab('agents')}
          >
            Agents
          </button>
          <button
            className={activeTab === 'policies' ? 'active' : ''}
            onClick={() => setActiveTab('policies')}
          >
            Policies
          </button>
          <button
            className={activeTab === 'logs' ? 'active' : ''}
            onClick={() => setActiveTab('logs')}
          >
            Audit Logs
          </button>
        </nav>
      </header>

      <main className="app-content">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'agents' && <AgentTestPanel />}
        {activeTab === 'policies' && <PolicyManagement />}
        {activeTab === 'logs' && <AuditLogs />}
      </main>

      <footer className="app-footer">
        <p>© Cognivern - Powered by Recall Network</p>
      </footer>
    </div>
  );
}

export default App;
