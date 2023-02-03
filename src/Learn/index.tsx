import { Grid } from "@mui/material";
import { FC } from "react";
import Layout from "../Layout";
import LearnItem from "./LearnItem";

type LearnProps = {};

const Learn: FC<LearnProps> = () => {
  return (
    <Layout>
      <Grid container spacing={4}>
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <LearnItem key={i} />
          ))}
      </Grid>
    </Layout>
  );
};

export default Learn;
