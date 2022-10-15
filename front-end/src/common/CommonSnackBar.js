import React from "react"
import {
  withStyles,
  Snackbar,
  Typography,
  Grid,
  Slide
} from "@material-ui/core"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import ErrorIcon from "@material-ui/icons/Error"
import customBlack from "styles/color/customBlack"

const styles = (theme) => ({
  success: {
    backgroundColor: theme.palette.common.white,
    color: customBlack[500],
    borderRadius: 10
  },
  error: {
    backgroundColor: theme.snackBar.error.background,
    color: theme.palette.common.white
  },
  message: {
    color: theme.snackBar.color
  },
  icon: {
    fontSize: 20
  },
  title: {
    color: customBlack[500]
  },
  itemMargin: {
    marginRight: 8,
    marginTop: 4
  }
})
const variantIcon = {
  success: CheckCircleIcon,
  error: ErrorIcon
}
function SnackbarContent(variant, message, classes, title) {
  const Icon = variantIcon[variant]

  return (
    <Grid container direction="column">
      {title ? (
        <Grid item>
          <Typography variant="h3" className={classes.title}>
            {title}
          </Typography>
        </Grid>
      ) : (
        <></>
      )}
      <Grid item container wrap="nowrap" alignItems="center">
        {title ? (
          <></>
        ) : (
          <Grid item className={classes.itemMargin}>
            <Icon className={classes.icon} />
          </Grid>
        )}
        <Grid item>
          <Typography className={classes[variant]}>{message}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
function CommonSnackbar({
  classes,
  message,
  variant = "success",
  open,
  action = null,
  title = null,
  onClose,
  autoHideDuration = 3000,
  position = {
    vertical: "top",
    horizontal: "right"
  },
  snackBarClass
}) {
  return (
    <Snackbar
      anchorOrigin={position}
      onClose={onClose}
      open={open}
      onClick={action}
      ClickAwayListenerProps={{
        mouseEvent: false
      }}
      ContentProps={{
        className: snackBarClass,
        classes: {
          root: classes[variant]
        }
      }}
      TransitionComponent={Slide}
      message={SnackbarContent(variant, message, classes, title)}
      autoHideDuration={autoHideDuration}
    ></Snackbar>
  )
}
export default withStyles(styles)(CommonSnackbar)
