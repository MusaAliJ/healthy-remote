import React from "react"
import { Typography, withStyles } from "@material-ui/core"
import MaterialTable from "material-table"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"

const style = () => ({
  heading: {
    fontSize: 32
  }
})

function CompaniesTable({
  companies,
  handleRemoveButtonClick,
  toggleAddEditCompaniesDialog,
  classes
}) {
  const columns = [
    {
      field: "delete",
      title: "",
      width: "10%",
      render: (rowData) => (
        <IconButton onClick={() => handleRemoveButtonClick(rowData)}>
          <DeleteIcon color="error" />
        </IconButton>
      )
    },
    {
      field: "name",
      title: "Company Name"
    }
  ]

  return (
    <MaterialTable
      columns={columns}
      data={companies}
      components={{
        Container: (props) => props.children
      }}
      actions={[
        {
          icon: "add",
          iconProps: {
            color: "secondary",
            fontSize: "large"
          },
          tooltip: "Add Company",
          isFreeAction: true,
          onClick: (e, rowData) => toggleAddEditCompaniesDialog(rowData, "add")
        },
        {
          icon: "edit",
          tooltip: "Edit Company",
          onClick: (e, rowData) => toggleAddEditCompaniesDialog(rowData, "edit")
        }
      ]}
      localization={{
        header: {
          actions: ""
        }
      }}
      title={
        <Typography variant="h2" className={classes.heading}>
          Companies
        </Typography>
      }
      options={{
        search: false,
        paging: false,
        headerStyle: {
          fontSize: 17,
          fontWeight: 700
        }
      }}
    />
  )
}

export default withStyles(style)(CompaniesTable)
