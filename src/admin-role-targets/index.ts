// https://www.terraform.io/docs/providers/okta/r/admin_role_targets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdminRoleTargetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of app names (name represents set of app instances) or a combination of app name and app instance ID (like 'salesforce' or 'facebook.0oapsqQ6dv19pqyEo0g3')
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_targets#apps AdminRoleTargets#apps}
  */
  readonly apps?: string[];
  /**
  * List of group IDs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_targets#groups AdminRoleTargets#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_targets#id AdminRoleTargets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of the role that is assigned to the user and supports optional targets
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_targets#role_type AdminRoleTargets#role_type}
  */
  readonly roleType: string;
  /**
  * User associated with the role
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_targets#user_id AdminRoleTargets#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/admin_role_targets okta_admin_role_targets}
*/
export class AdminRoleTargets extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_admin_role_targets";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/admin_role_targets okta_admin_role_targets} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdminRoleTargetsConfig
  */
  public constructor(scope: Construct, id: string, config: AdminRoleTargetsConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_admin_role_targets',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.41.0',
        providerVersionConstraint: '~> 3.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apps = config.apps;
    this._groups = config.groups;
    this._id = config.id;
    this._roleType = config.roleType;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apps - computed: false, optional: true, required: false
  private _apps?: string[]; 
  public get apps() {
    return cdktf.Fn.tolist(this.getListAttribute('apps'));
  }
  public set apps(value: string[]) {
    this._apps = value;
  }
  public resetApps() {
    this._apps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsInput() {
    return this._apps;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }

  // role_type - computed: false, optional: false, required: true
  private _roleType?: string; 
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
  public set roleType(value: string) {
    this._roleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTypeInput() {
    return this._roleType;
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
      apps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apps),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      role_type: cdktf.stringToTerraform(this._roleType),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }
}
