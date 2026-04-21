/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Login from './pages/Login';
import ResidentDashboard from './pages/ResidentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ComplaintTracker from './pages/ComplaintTracker';
import ComplaintFeedback from './pages/ComplaintFeedback';
import CreateComplaint from './pages/CreateComplaint';
import AdminWorkers from './pages/AdminWorkers';
import AdminQueue from './pages/AdminQueue';
import AdminReports from './pages/AdminReports';

export default function App() {
  const [currentView, setCurrentView] = useState('login'); // login, resident, admin, admin-workers, admin-queue, admin-reports, tracker, complaints, feedback

  const navigate = (view: string) => setCurrentView(view);

  return (
    <>
      {currentView === 'login' && <Login onLogin={(role) => navigate(role)} />}
      {currentView === 'resident' && <ResidentDashboard onNavigate={navigate} />}
      {currentView === 'admin' && <AdminDashboard onNavigate={navigate} />}
      {currentView === 'admin-workers' && <AdminWorkers onNavigate={navigate} />}
      {currentView === 'admin-queue' && <AdminQueue onNavigate={navigate} />}
      {currentView === 'admin-reports' && <AdminReports onNavigate={navigate} />}
      {currentView === 'tracker' && <ComplaintTracker onNavigate={navigate} />}
      {currentView === 'complaints' && <CreateComplaint onNavigate={navigate} />}
      {currentView === 'feedback' && <ComplaintFeedback onNavigate={navigate} />}
    </>
  );
}
