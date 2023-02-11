// https://www.terraform.io/docs/providers/okta/d/everyone_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaEveryoneGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/everyone_group#id DataOktaEveryoneGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Fetch group users, having default off cuts down on API calls.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/everyone_group#include_users DataOktaEveryoneGroup#include_users}
  */
  readonly includeUsers?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/everyone_group okta_everyone_group}
*/
export class DataOktaEveryoneGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_everyone_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/everyone_group okta_everyone_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaEveryoneGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaEveryoneGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_everyone_group',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.42.0',
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
    this._id = config.id;
    this._includeUsers = config.includeUsers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      include_users: cdktf.booleanToTerraform(this._includeUsers),
    };
  }
}
