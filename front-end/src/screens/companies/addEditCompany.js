import React, { useEffect, useState, useContext } from "react"
import {
  Grid,
  TextField,
  Typography,
  MenuItem,
  LinearProgress,
  withStyles
} from "@material-ui/core"
import SimpleDialog from "common/SimpleDialog"
// import UserContext from "context/UserContext"
// import PhoneNumberInput from "common/PhoneNumberInput"

const styles = () => ({
  formContainer: {
    paddingTop: 20
  }
})

function AddEditCompanies({
  classes,
  openAddEditCompaniesDialog,
  toggleAddEditCompaniesDialog,
  addEditType,
  CompanyDetails,
  refetchCompanies,
  setShowSnackBar,
  setErrorMessage
}) {
  // const UserContext = useContext(UserContext)

  const [name, setName] = useState("")

  const isEditMode = addEditType === "edit"

  useEffect(() => {
    if (CompanyDetails?.bvid) setName(CompanyDetails.name)
    else setName("")
  }, [CompanyDetails])

  function isLoading() {
    return false
    // return addCompanyLoading || updateCompanyLoading
  }

  const PHONE_NUMBER_REGEX = /^\+923([0-6]{1})([\d]{8})$/g

  function isPhoneNumberValid(value) {
    return value.match(PHONE_NUMBER_REGEX)
  }

  function save() {
    if (name) {
      // isEditMode ? handleUpdateCompany() : handleAddCompany()
    }
  }

  function checkValidation() {
    return name
  }

  // async function handleAddCompany() {
  //   try {
  //     if (!checkValidation()) {
  //       setShowSnackBar(true)
  //       setErrorMessage("Please fill all fields.")
  //       return
  //     }
  //     const variables = {
  //       name: name,
  //       Companyname: phoneNumber,
  //       role
  //     }
  //     const response = await addCompanyMutation({
  //       variables
  //     })
  //     if (response.data.addCompany) {
  //       toggleAddEditCompaniesDialog()
  //       refetchCompanies()
  //     }
  //   } catch (error) {
  //     setShowSnackBar(true)
  //     setErrorMessage(extractError(error))
  //   }
  // }

  // async function handleUpdateCompany() {
  //   const name = extractFirstAndLastNames(name)
  //   const variables = {
  //     bvid: CompanyDetails.bvid,
  //     role,
  //     ...(`${CompanyDetails.firstName} ${CompanyDetails.lastName}` !==
  //       name && {
  //       firstName: name.firstName,
  //       lastName: name.lastName
  //     }),
  //     ...(CompanyDetails.Companyname !== phoneNumber && {
  //       Companyname: phoneNumber
  //     })
  //   }
  //   try {
  //     const response = await updateCompanyMutation({
  //       variables
  //     })
  //     if (response.data.updateCompany) {
  //       toggleAddEditCompaniesDialog()
  //       refetchCompanies()
  //     }
  //   } catch (error) {
  //     setShowSnackBar(true)
  //     setErrorMessage(extractError(error))
  //   }
  // }

  return (
    <SimpleDialog
      medium
      fullWidth
      allowActions
      dialogOpen={openAddEditCompaniesDialog}
      okButton="Save"
      handleOk={save}
      cancelButton="Cancel"
      handleCancel={toggleAddEditCompaniesDialog}
      maxWidth="sm"
      title={
        <Typography variant="h5">
          {`${isEditMode ? "Edit" : "Add"} Company`}
        </Typography>
      }
      body={
        <>
          {isLoading() && <LinearProgress />}

          <Grid container spacing={3} className={classes.formContainer}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="name"
                label="Company Name"
                value={name}
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <PhoneNumberInput
                required
                label="Phone Number"
                onChange={(value) => setPhoneNumber(value)}
                value={phoneNumber}
                helperText="+92 3xx xxxxxxx format"
                variant="outlined"
                disable={isLoading()}
              />
            </Grid> */}
          </Grid>
        </>
      }
    />
  )
}

export default withStyles(styles)(AddEditCompanies)
