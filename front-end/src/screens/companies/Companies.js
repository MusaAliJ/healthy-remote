import React, { useState, useEffect, useContext } from "react"
import { LinearProgress, Typography } from "@material-ui/core"
import CustomCard from "common/CustomCard"
import CompanyTable from "./CompaniesTable"
import CommonSnackBar from "common/CommonSnackBar"
// import { extractError } from "utils/helperFunctions"
// import { editCompanyTypes, CompanyTypesMapped } from "utils/CompanyHelper"
import SimpleDialog from "common/SimpleDialog"
// import UserContext from "context/UserContext"
import AddEditCompanies from "./addEditCompany"
// import { CompanyTypesList, permanentCompanyTypes } from "utils/CompanyHelper"

function Companies() {
  // const UserContext = useContext(UserContext)
  // const { isCompanyRole, Company } = UserContext

  const [companiesData, setCompaniesData] = useState([])
  const [showSnackBar, setShowSnackBar] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [currentCompanyRowData, setCurrentCompanyRowData] = useState({})
  const [openDialog, setOpenDialog] = useState(false)
  const [openAddEditCompaniesDialog, setOpenAddEditCompaniesDialog] =
    useState(false)
  const [addEditType, setAddEditType] = useState(false)

  function isLoading() {
    return false
    // return (
    //   loadingCompanies || loadingRiders || removeCompanyLoading || removeRiderLoading
    // )
  }

  useEffect(() => {
    // fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // function fetchData() {
  //   fetchStoreCompanies({
  //     variables: {
  //       ...(merchantBvid && { merchantBvid })
  //     }
  //   })
  //   fetchStoreRiders({
  //     variables: {
  //       ...(merchantBvid && { merchantXid: merchantBvid })
  //     }
  //   })
  // }

  function refetchCompanies() {
    // refetchStoreCompanies()
  }

  function handleRemoveButtonClick(rowData) {
    setCurrentCompanyRowData(rowData)
    setOpenDialog(true)
  }

  function toggleDialog() {
    setOpenDialog(!openDialog)
  }

  function closeSnackbar() {
    setShowSnackBar(false)
    setErrorMessage("")
  }

  function toggleAddEditCompaniesDialog(rowData, type) {
    if (!openAddEditCompaniesDialog) {
      // if dialog needs to be opened
      if (type === "edit") {
        setCurrentCompanyRowData(rowData)
        setAddEditType(type)
      } else setAddEditType(type)
    } else {
      // if dialog needs to be closed
      setCurrentCompanyRowData({})
      setAddEditType("")
    }
    setOpenAddEditCompaniesDialog(!openAddEditCompaniesDialog)
  }

  function handleRemoveConfirm() {
    // removeCompany()
    setOpenDialog(false)
  }

  // async function removeCompany() {
  //   try {
  //     const response = await removeCompanyMutation({
  //       variables: {
  //         bvid: currentCompanyRowData.bvid
  //       }
  //     })
  //     if (response.data.deleteCompany) {
  //       refetchCompanies()
  //       setCurrentCompanyRowData({})
  //     }
  //   } catch (error) {
  //     setShowSnackBar(true)
  //     setErrorMessage(extractError(error))
  //   }
  // }

  return (
    <>
      <SimpleDialog
        title={
          <Typography variant="h5">
            {`Delete ${currentCompanyRowData.role}`}
          </Typography>
        }
        body={
          <Typography>
            {`Are you sure you want to delete this ${currentCompanyRowData.role}? `}
          </Typography>
        }
        dialogOpen={openDialog}
        okButton="Yes"
        handleOk={handleRemoveConfirm}
        small
        cancelButton="No"
        handleCancel={toggleDialog}
        allowActions
      />

      <AddEditCompanies
        openAddEditCompaniesDialog={openAddEditCompaniesDialog}
        toggleAddEditCompaniesDialog={toggleAddEditCompaniesDialog}
        CompanyDetails={currentCompanyRowData}
        addEditType={addEditType}
        refetchCompanies={refetchCompanies}
        setShowSnackBar={setShowSnackBar}
        setErrorMessage={setErrorMessage}
      />

      <CustomCard>
        {isLoading() ? (
          <LinearProgress />
        ) : companiesData ? (
          <CompanyTable
            companies={companiesData?.companies || []}
            handleRemoveButtonClick={handleRemoveButtonClick}
            toggleAddEditCompaniesDialog={toggleAddEditCompaniesDialog}
          />
        ) : (
          <></>
        )}
      </CustomCard>

      <CommonSnackBar
        variant="error"
        open={showSnackBar}
        message={errorMessage}
        onClose={closeSnackbar}
      />
    </>
  )
}
export default Companies
