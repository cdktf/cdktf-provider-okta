// https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/group_memberships
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupMembershipsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of a Okta group.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/group_memberships#group_id GroupMemberships#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/group_memberships#id GroupMemberships#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource concerns itself with all users added/deleted to the group; even those managed outside of the resource.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/group_memberships#track_all_users GroupMemberships#track_all_users}
  */
  readonly trackAllUsers?: boolean | cdktf.IResolvable;
  /**
  * The list of Okta user IDs which the group should have membership managed for.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/group_memberships#users GroupMemberships#users}
  */
  readonly users: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/group_memberships okta_group_memberships}
*/
export class GroupMemberships extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_group_memberships";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/group_memberships okta_group_memberships} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupMembershipsConfig
  */
  public constructor(scope: Construct, id: string, config: GroupMembershipsConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_group_memberships',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.0.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._id = config.id;
    this._trackAllUsers = config.trackAllUsers;
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

  // track_all_users - computed: false, optional: true, required: false
  private _trackAllUsers?: boolean | cdktf.IResolvable; 
  public get trackAllUsers() {
    return this.getBooleanAttribute('track_all_users');
  }
  public set trackAllUsers(value: boolean | cdktf.IResolvable) {
    this._trackAllUsers = value;
  }
  public resetTrackAllUsers() {
    this._trackAllUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackAllUsersInput() {
    return this._trackAllUsers;
  }

  // users - computed: false, optional: false, required: true
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
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
      id: cdktf.stringToTerraform(this._id),
      track_all_users: cdktf.booleanToTerraform(this._trackAllUsers),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
    };
  }
}
