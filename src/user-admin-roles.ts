// https://www.terraform.io/docs/providers/okta/r/user_admin_roles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserAdminRolesConfig extends cdktf.TerraformMetaArguments {
  /**
  * User Okta admin roles - ie. ['APP_ADMIN', 'USER_ADMIN']
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_admin_roles#admin_roles UserAdminRoles#admin_roles}
  */
  readonly adminRoles: string[];
  /**
  * When this setting is enabled, the admins won't receive any of the default Okta administrator emails
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_admin_roles#disable_notifications UserAdminRoles#disable_notifications}
  */
  readonly disableNotifications?: boolean | cdktf.IResolvable;
  /**
  * ID of a Okta User
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_admin_roles#user_id UserAdminRoles#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/user_admin_roles okta_user_admin_roles}
*/
export class UserAdminRoles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_user_admin_roles";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/user_admin_roles okta_user_admin_roles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserAdminRolesConfig
  */
  public constructor(scope: Construct, id: string, config: UserAdminRolesConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_user_admin_roles',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminRoles = config.adminRoles;
    this._disableNotifications = config.disableNotifications;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_roles - computed: false, optional: false, required: true
  private _adminRoles?: string[]; 
  public get adminRoles() {
    return this.getListAttribute('admin_roles');
  }
  public set adminRoles(value: string[]) {
    this._adminRoles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminRolesInput() {
    return this._adminRoles;
  }

  // disable_notifications - computed: false, optional: true, required: false
  private _disableNotifications?: boolean | cdktf.IResolvable; 
  public get disableNotifications() {
    return this.getBooleanAttribute('disable_notifications') as any;
  }
  public set disableNotifications(value: boolean | cdktf.IResolvable) {
    this._disableNotifications = value;
  }
  public resetDisableNotifications() {
    this._disableNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNotificationsInput() {
    return this._disableNotifications;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_roles: cdktf.listMapper(cdktf.stringToTerraform)(this._adminRoles),
      disable_notifications: cdktf.booleanToTerraform(this._disableNotifications),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }
}
