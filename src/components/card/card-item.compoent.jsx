import { Card } from "antd";

import JobDescription from "../description/description.component";

const CardItem = props => (
  <Card
    size="small"
    key={props}
    title={props.name}
    extra={<a href={props.url}>More</a>}>
    <JobDescription props={props} />
  </Card>
);
export default CardItem;
