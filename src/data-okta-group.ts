// https://www.terraform.io/docs/providers/okta/d/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Force delay of the group read by N seconds. Useful when eventual consistency of group information needs to be allowed for; for instance, when group rules are known to have been applied.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/group#delay_read_seconds DataOktaGroup#delay_read_seconds}
  */
  readonly delayReadSeconds?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/group#id DataOktaGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Fetch group users, having default off cuts down on API calls.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/group#include_users DataOktaGroup#include_users}
  */
  readonly includeUsers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/group#name DataOktaGroup#name}
  */
  readonly name?: string;
  /**
  * Type of the group. When specified in the terraform resource, will act as a filter when searching for the group
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/group#type DataOktaGroup#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/group okta_group}
*/
export class DataOktaGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/group okta_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_group',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.34.0',
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
    this._delayReadSeconds = config.delayReadSeconds;
    this._id = config.id;
    this._includeUsers = config.includeUsers;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delay_read_seconds - computed: false, optional: true, required: false
  private _delayReadSeconds?: string; 
  public get delayReadSeconds() {
    return this.getStringAttribute('delay_read_seconds');
  }
  public set delayReadSeconds(value: string) {
    this._delayReadSeconds = value;
  }
  public resetDelayReadSeconds() {
    this._delayReadSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayReadSecondsInput() {
    return this._delayReadSeconds;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: true, required: false
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

  // include_users - computed: false, optional: true, required: false
  private _includeUsers?: boolean | cdktf.IResolvable; 
  public get includeUsers() {
    return this.getBooleanAttribute('include_users');
  }
  public set includeUsers(value: boolean | cdktf.IResolvable) {
    this._includeUsers = value;
  }
  public resetIncludeUsers() {
    this._includeUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUsersInput() {
    return this._includeUsers;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delay_read_seconds: cdktf.stringToTerraform(this._delayReadSeconds),
      id: cdktf.stringToTerraform(this._id),
      include_users: cdktf.booleanToTerraform(this._includeUsers),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
