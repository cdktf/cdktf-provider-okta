// https://www.terraform.io/docs/providers/okta/r/admin_role_custom.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdminRoleCustomConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human-readable description of the new Role
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom.html#description AdminRoleCustom#description}
  */
  readonly description: string;
  /**
  * The name given to the new Role
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom.html#label AdminRoleCustom#label}
  */
  readonly label: string;
  /**
  * The permissions that the new Role grants.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom.html#permissions AdminRoleCustom#permissions}
  */
  readonly permissions?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom.html okta_admin_role_custom}
*/
export class AdminRoleCustom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_admin_role_custom";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom.html okta_admin_role_custom} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdminRoleCustomConfig
  */
  public constructor(scope: Construct, id: string, config: AdminRoleCustomConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_admin_role_custom',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._label = config.label;
    this._permissions = config.permissions;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string[]; 
  public get permissions() {
    return this.getListAttribute('permissions');
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      label: cdktf.stringToTerraform(this._label),
      permissions: cdktf.listMapper(cdktf.stringToTerraform)(this._permissions),
    };
  }
}
