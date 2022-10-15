import React from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  withStyles,
  CircularProgress,
  Grid
} from "@material-ui/core"
import { Close } from "@material-ui/icons"

const styles = (theme) => ({
  overflowVisible: {
    overflow: "visible"
  },
  overflowHidden: {
    overflow: "hidden"
  },
  closeIcon: {
    color: theme.custom.blueGrey,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.custom.whiteGrey,
      borderRadius: "50%"
    }
  }
})
function SimpleDialog({
  body,
  dialogOpen,
  title,
  titleClass,
  maxWidth,
  classes,
  overflowVisible = false,
  fullWidth = false,
  cancelButton = "Cancel",
  okButton = "OK",
  confirmButtonClass,
  handleCancel,
  handleOk,
  loading = false,
  allowActions = false,
  disabled = false,
  small = false,
  onHandleClose,
  closeButton,
  bodyId = ""
}) {
  const rootClass = overflowVisible ? { root: classes.overflowVisible } : null
  const paperClass = overflowVisible ? { paper: classes.overflowVisible } : null

  const condition =
    title && closeButton
      ? "space-between"
      : title
      ? "flex-start"
      : closeButton
      ? "flex-end"
      : ""
  return (
    <Dialog
      onClose={onHandleClose}
      aria-labelledby="simple-dialog-title"
      open={dialogOpen}
      maxWidth={maxWidth ? maxWidth : "sm"}
      fullWidth={fullWidth}
      classes={paperClass}
    >
      <DialogTitle id="simple-dialog-title" className={titleClass}>
        <Grid container justifyContent={condition}>
          {title ? <Grid item>{title}</Grid> : <></>}
          {closeButton ? (
            <Grid item>
              <Close className={classes.closeIcon} onClick={onHandleClose} />
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      </DialogTitle>

      <DialogContent id={bodyId} classes={rootClass}>
        {body}
      </DialogContent>
      {allowActions ? (
        <DialogActions>
          {loading ? (
            <Grid>
              <CircularProgress size={24} />
            </Grid>
          ) : (
            <>
              {handleCancel ? (
                <Button
                  onClick={handleCancel}
                  color="primary"
                  variant="outlined"
                  size={small ? "small" : "medium"}
                >
                  {cancelButton}
                </Button>
              ) : (
                <></>
              )}

              {handleOk ? (
                <Button
                  onClick={handleOk}
                  color={disabled ? "default" : "primary"}
                  variant="contained"
                  disabled={loading || disabled}
                  size={small ? "small" : "medium"}
                  className={confirmButtonClass}
                >
                  {okButton}
                </Button>
              ) : (
                <></>
              )}
            </>
          )}
        </DialogActions>
      ) : (
        <></>
      )}
    </Dialog>
  )
}

export default withStyles(styles)(SimpleDialog)
