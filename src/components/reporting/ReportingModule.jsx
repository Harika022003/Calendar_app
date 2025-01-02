// ReportingModule.jsx
import React from 'react'; // React: always needed
// import { Tabs, Tab, Box } from '@mui/material'; // Material UI for styling
import CommunicationFrequencyReport from './CommunicationFrequencyReport'; // Tab 1: Frequency Report
import EngagementEffectivenessReport from './EngagementEffectivenessReport'; // Tab 2: Engagement Effectiveness
import OverdueTrendsReport from './OverdueTrendsReport'; // Tab 3: Overdue Trends
import ActivityLog from './ActivityLog'; // Tab 4: Activity Log

const ReportingModule = () => {
  const [currentTab, setCurrentTab] = React.useState(0); // Tab state

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue); // Update tab state
  };

  return (
    <div style={{ width: '100%', padding: '16px' }}>
  {/* Tab buttons */}
  <div style={{ display: 'flex', marginBottom: '16px' }}>
    <div
      onClick={() => setCurrentTab(0)}
      style={{
        padding: '8px 16px',
        backgroundColor: currentTab === 0 ? '#764ABC' : 'transparent', // Purple background for selected tab
        color: currentTab === 0 ? '#FFFFFF' : '#000000', // White text for selected tab
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s',
        marginRight: '8px',
      }}
    >
      Communication Frequency
    </div>
    <div
      onClick={() => setCurrentTab(1)}
      style={{
        padding: '8px 16px',
        backgroundColor: currentTab === 1 ? '#764ABC' : 'transparent',
        color: currentTab === 1 ? '#FFFFFF' : '#000000',
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s',
        marginRight: '8px',
      }}
    >
      Engagement Effectiveness
    </div>
    <div
      onClick={() => setCurrentTab(2)}
      style={{
        padding: '8px 16px',
        backgroundColor: currentTab === 2 ? '#764ABC' : 'transparent',
        color: currentTab === 2 ? '#FFFFFF' : '#000000',
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s',
        marginRight: '8px',
      }}
    >
      Overdue Trends
    </div>
    <div
      onClick={() => setCurrentTab(3)}
      style={{
        padding: '8px 16px',
        backgroundColor: currentTab === 3 ? '#764ABC' : 'transparent',
        color: currentTab === 3 ? '#FFFFFF' : '#000000',
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s',
      }}
    >
      Activity Log
    </div>
  </div>

  {/* Tab content */}
  <div>
    {currentTab === 0 && <CommunicationFrequencyReport />} {/* Content for Tab 1 */}
    {currentTab === 1 && <EngagementEffectivenessReport />} {/* Content for Tab 2 */}
    {currentTab === 2 && <OverdueTrendsReport />} {/* Content for Tab 3 */}
    {currentTab === 3 && <ActivityLog />} {/* Content for Tab 4 */}
  </div>
</div>

  );
};

export default ReportingModule; // Default export
