import { Component } from "react";
import { UserPreferences } from '../component/UserPreferences'

class Protected extends Component {
  static contextType = UserPreferences;
  render() {
    const { children, role, noauth } = this.props;
    const { userName } = this.context;
    const { userRole } = this.context;

    return (
      ((noauth && !userName) ||
        (!noauth && userName && (!role || userRole === role))) && <>{children}</>
    );
  }
}

export { Protected };
