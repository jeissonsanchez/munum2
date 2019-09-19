import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../componets/Grid/GidItem";
import GridContainer from "../componets/Grid/GridContainer";
import Table from "../componets/Table/Table.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function TableList(props) {
  return (
    <GridContainer>
      asdfadkslfkdsjkl
      <GridItem xs={12} sm={12} md={12}>
        <Table
          tableHeaderColor="primary"
          tableHead={["Name", "Country", "City", "Salary"]}
          tableData={[
            ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
            ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
            ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
            ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
            ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
            ["Mason Porter", "Chile", "Gloucester", "$78,615"]
          ]}
        />
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(TableList);
