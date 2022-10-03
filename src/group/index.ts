// https://www.terraform.io/docs/providers/okta/r/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * JSON formatted custom attributes for a group. It must be JSON due to various types Okta allows.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group#custom_profile_attributes Group#custom_profile_attributes}
  */
  readonly customProfileAttributes?: string;
  /**
  * Group description
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group#description Group#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group#id Group#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Group name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group#name Group#name}
  */
  readonly name: string;
  /**
  * Ignore users sync. This is a temporary solution until 'users' field is supported in this resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group#skip_users Group#skip_users}
  */
  readonly skipUsers?: boolean | cdktf.IResolvable;
  /**
  * Users associated with the group. This can also be done per user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/group#users Group#users}
  */
  readonly users?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/group okta_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/group okta_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_group',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.36.0',
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
    this._customProfileAttributes = config.customProfileAttributes;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._skipUsers = config.skipUsers;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_profile_attributes - computed: false, optional: true, required: false
  private _customProfileAttributes?: string; 
  public get customProfileAttributes() {
    return this.getStringAttribute('custom_profile_attributes');
  }
  public set customProfileAttributes(value: string) {
    this._customProfileAttributes = value;
  }
  public resetCustomProfileAttributes() {
    this._customProfileAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProfileAttributesInput() {
    return this._customProfileAttributes;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // skip_users - computed: false, optional: true, required: false
  private _skipUsers?: boolean | cdktf.IResolvable; 
  public get skipUsers() {
    return this.getBooleanAttribute('skip_users');
  }
  public set skipUsers(value: boolean | cdktf.IResolvable) {
    this._skipUsers = value;
  }
  public resetSkipUsers() {
    this._skipUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUsersInput() {
    return this._skipUsers;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
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
      custom_profile_attributes: cdktf.stringToTerraform(this._customProfileAttributes),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      skip_users: cdktf.booleanToTerraform(this._skipUsers),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
    };
  }
}
