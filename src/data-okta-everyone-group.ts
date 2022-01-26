// https://www.terraform.io/docs/providers/okta/d/everyone_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaEveryoneGroupConfig extends cdktf.TerraformMetaArguments {
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
  public static readonly tfResourceType: string = "okta_everyone_group";

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
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
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
  public get id() {
    return this.getStringAttribute('id');
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
      include_users: cdktf.booleanToTerraform(this._includeUsers),
    };
  }
}
