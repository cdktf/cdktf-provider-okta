// https://www.terraform.io/docs/providers/okta/r/user_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human-readable description of the type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_type#description UserType#description}
  */
  readonly description: string;
  /**
  * The display name for the type	
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_type#display_name UserType#display_name}
  */
  readonly displayName: string;
  /**
  * The display name for the type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_type#name UserType#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/user_type okta_user_type}
*/
export class UserType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_user_type";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/user_type okta_user_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserTypeConfig
  */
  public constructor(scope: Construct, id: string, config: UserTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_user_type',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
