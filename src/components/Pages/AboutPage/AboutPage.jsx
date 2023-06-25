import React from "react";
import { Grid, Typography, List, ListItem, ListItemText, Paper, Link } from "@mui/material";

const AboutPage = () => {
  const items = [ // Storing display text for DOM so Material code isn't so messy
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "Express.js",
    "SQL",
    "Material-UI",
    "Redux",
    "fly.io",
    "PostgresQL",
    "Postman",
  ];

  return (
    <Grid container justifyContent="center" spacing={2} sx={{ marginTop: "40px" }}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ padding: "24px" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Languages/Programs/Packages/Libraries Used:
          </Typography>
          <List sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {items.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: "24px" }}>
          <Typography variant="h4" align="center" gutterBottom>
            <Link href="https://github.com/travismack47" target="_blank" rel="noopener">
              GitHub
            </Link>
          </Typography>
          <Typography variant="h4" align="center" gutterBottom>
            Contact info: travismack47@protonmail.com
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AboutPage;
