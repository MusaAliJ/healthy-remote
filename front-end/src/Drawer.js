import React, { useContext, useState } from "react"
import {
  Drawer,
  ListItem,
  List,
  withStyles,
  Grid,
  Typography,
  CircularProgress,
  Tooltip
} from "@material-ui/core"
import customBlack from "./styles/color/customBlack"
// import SimpleDialog from "common/SimpleDialog"
// import CommonSnackBar from "common/CommonSnackBar"
// import userContext from "context/userContext"
import { UserAccessControlList } from "./RoleBasedAccessList"
// import { keys, removeFromStorage } from "utils/localStorage"
import { useNavigate } from "react-router-dom"

import DashboardIcon from "assets/icons/drawer/Dashboard_Active.png"
import DashboardInactiveIcon from "assets/icons/drawer/Dashboard_Inactive.png"
import EmployeesIcon from "assets/icons/drawer/Employees_Active.png"
import EmployeesInactiveIcon from "assets/icons/drawer/Employees_Inactive.png"
import FamilyMemberIcon from "assets/icons/drawer/Family_Member_Active.png"
import FamilyMemberInactiveIcon from "assets/icons/drawer/Family_Member_Inactive.png"
import LogoutIcon from "assets/icons/drawer/Logout.png"

export const DrawerWidth = 240

const styles = (theme) => ({
  drawerList: {
    width: DrawerWidth,
    flexShrink: 0,
    height: "calc(100vh - 260px)",
    overflowY: "scroll"
  },
  logo: {
    textAlign: "center",
    padding: "20px 0"
  },
  logo_image: {
    height: 70,
    width: 152
  },
  logo_support: {
    height: 280
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: 16,
    color: customBlack[200],
    fontWeight: 600
  },
  selectedRoute: {
    display: "flex",
    justifyContent: "space-between",
    padding: 16,
    color: customBlack[500],
    fontWeight: 600
    // backgroundColor: customOrange.tint,
    // borderRight: `4px solid ${customOrange[600]}`
  },
  icon: {
    // color: theme.custom.blueGrey,
    width: 20
  },
  listText: {
    // color: theme.custom.blueGrey,
    fontSize: 16,
    fontWeight: "600"
  },
  isSelectedText: {
    fontWeight: "700",
    // color: theme.palette.common.white,
    fontSize: 16
  },
  footer: {
    padding: 8
    // borderTop: `1px solid ${theme.custom.grey}`
  },
  footerBtn: {
    margin: 8,
    padding: 8,
    // color: theme.custom.blueGrey,
    // border: `1px solid ${theme.custom.grey}`,
    fontSize: 14,
    borderRadius: 50,
    cursor: "pointer"
  },
  footerIcon: {
    width: 18,
    height: 18
  }
})

function LayoutDrawer({ classes }) {
  const navigate = useNavigate()
  // const location = useLocation()
  // const { getUserRole } = useContext(userContext)
  // const role = getUserRole()
  const role = "Owner"
  // const role = "Employee"

  const DrawerItems = [
    {
      title: "Dashboard",
      route: "/dashboard",
      icon: DashboardIcon,
      inActiveIcon: DashboardInactiveIcon
    },
    {
      title: "Employees",
      route: "/employees",
      icon: EmployeesIcon,
      inActiveIcon: EmployeesInactiveIcon
    },
    {
      title: "Family Members",
      route: "/family-members",
      icon: FamilyMemberIcon,
      inActiveIcon: FamilyMemberInactiveIcon
    }
  ]

  // const logoutDrawerIcon = {
  //   title: "Logout",
  //   action: () => logout(),
  //   route: "/login"
  // }

  // function logout() {
  //   removeFromStorage(keys.BRANCH)
  //   userContext.logout()
  // }

  function isSelected(route) {
    return true
    // return route !== "/"
    //   ? location.pathname.includes(route)
    //   : location.pathname === route
  }

  let filteredIconsList = []
  const aclList = UserAccessControlList?.[role] || []
  aclList.length &&
    aclList.forEach((accessListItem) => {
      const accessibleScreenIcons = DrawerItems?.filter(
        (item) => item.route.indexOf(accessListItem) !== -1
      )
      filteredIconsList = [...filteredIconsList, ...accessibleScreenIcons]
    })

  // const drawerFooterItems = [logoutDrawerIcon]

  // return userContext.isAuthenticated() ? (
  return (
    <Drawer variant="permanent">
      <List className={classes.drawerList}>
        {filteredIconsList?.map((item, index) => (
          <ListItem
            alignItems="center"
            className={
              isSelected(item.route) ? classes.selectedRoute : classes.listItem
            }
            button
            key={index}
            onClick={() => navigate(item.route)}
          >
            <Grid container item xs={3} justifyContent="center">
              <Grid item>
                <img
                  src={isSelected(item.route) ? item.icon : item.inActiveIcon}
                  alt={item.title}
                  className={item.iconClass || classes.icon}
                />
              </Grid>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="subtitle1">{item.title}</Typography>
            </Grid>
          </ListItem>
        ))}
      </List>
      {/* <Grid container item xs={12} className={classes.footer}>
        {drawerFooterItems.map((drawerFooterItem) => (
          <Tooltip
            arrow
            title={drawerFooterItem.title}
            key={drawerFooterItem.route}
          >
            <Grid
              item
              onClick={drawerFooterItem.action}
              className={classes.footerBtn}
            >
              <img
                src={drawerFooterItem.icon}
                alt={drawerFooterItem.title}
                className={classes.footerIcon}
              />
            </Grid>
          </Tooltip>
        ))}
      </Grid> */}
    </Drawer>
  )
  // ) : (
  //   <></>
  // )
}

export default withStyles(styles)(LayoutDrawer)
