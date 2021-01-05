import { Component } from "react";
import { UserPreferences } from '../component/UserPreferences'

class Protected extends Component {
  static contextType = UserPreferences;
  render() {
    const { children, role, noauth } = this.props;
    const { user } = this.context;

    let userName
    let userRole

    if (user != null) {
      userName = user.name;
      userRole = user.role;

    } else {
      userName = null;
      userRole = null
    }


    if ((noauth && !userName) ||(!noauth && userName && (!role || userRole === role))) {

      return (
        ((noauth && !userName) ||
          (!noauth && userName && (!role || userRole === role))) && <>{children}</>
      );

    } else {
      return null
    }

    // return (
    //   ((noauth && !userName) ||
    //     (!noauth && userName && (!role || userRole === role))) && <>{children}</>
    // );
  }
}

export { Protected };
