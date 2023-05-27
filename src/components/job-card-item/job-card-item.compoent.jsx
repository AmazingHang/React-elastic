import { Card } from "antd";

import JobDescription from "../job-description/job-description.component";

const JobCardItem = ({ props }) => (
  <Card size="small" title={props.name} extra={<a href={props.url}>More</a>}>
    <JobDescription props={props} />
  </Card>
);
export default JobCardItem;
