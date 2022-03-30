// https://www.terraform.io/docs/providers/okta/r/group_roles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupRolesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Admin roles associated with the group. This can also be done per user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_roles#admin_roles GroupRoles#admin_roles}
  */
  readonly adminRoles?: string[];
  /**
  * ID of group to attach admin roles to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_roles#group_id GroupRoles#group_id}
  */
  readonly groupId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/group_roles okta_group_roles}
*/
export class GroupRoles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_group_roles";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/group_roles okta_group_roles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupRolesConfig
  */
  public constructor(scope: Construct, id: string, config: GroupRolesConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_group_roles',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.20.8',
        providerVersionConstraint: '~> 3.20.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminRoles = config.adminRoles;
    this._groupId = config.groupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_roles - computed: false, optional: true, required: false
  private _adminRoles?: string[]; 
  public get adminRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('admin_roles'));
  }
  public set adminRoles(value: string[]) {
    this._adminRoles = value;
  }
  public resetAdminRoles() {
    this._adminRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminRolesInput() {
    return this._adminRoles;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_roles: cdktf.listMapper(cdktf.stringToTerraform)(this._adminRoles),
      group_id: cdktf.stringToTerraform(this._groupId),
    };
  }
}
