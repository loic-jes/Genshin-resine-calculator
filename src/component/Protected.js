import { Component } from "react";
import { UserPreferences } from '../component/UserPreferences'

class Protected extends Component {
  static contextType = UserPreferences;
  render() {
    const { children, role, noauth } = this.props;
    const { user } = this.context;


    if ((noauth && !user.name) ||(!noauth && user.name && (!role || user.role === role))) {

      return (
        ((noauth && !user.name) ||
          (!noauth && user.name && (!role || user.role === role))) && <>{children}</>
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
