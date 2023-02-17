import Header from '../Header'
import JobProfileSection from '../JobProfileSection'
import './index.css'

const Jobs = () => (
  <>
    <Header />
    <div className="job-profile-container" data-testid="loader">
      <JobProfileSection />
    </div>
  </>
)

export default Jobs
