// https://www.terraform.io/docs/providers/okta/r/group_memberships.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupMembershipsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of a Okta group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_memberships.html#group_id GroupMemberships#group_id}
  */
  readonly groupId: string;
  /**
  * The list of Okta user IDs which the group should have membership managed for.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group_memberships.html#users GroupMemberships#users}
  */
  readonly users: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/group_memberships.html okta_group_memberships}
*/
export class GroupMemberships extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_group_memberships";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/group_memberships.html okta_group_memberships} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupMembershipsConfig
  */
  public constructor(scope: Construct, id: string, config: GroupMembershipsConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_group_memberships',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._groupId = config.groupId;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // users - computed: false, optional: false, required: true
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      users: cdktf.listMapper(cdktf.stringToTerraform)(this._users),
    };
  }
}
