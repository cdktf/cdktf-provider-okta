// https://www.terraform.io/docs/providers/okta/d/auth_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaAuthServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/auth_server#name DataOktaAuthServer#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/auth_server okta_auth_server}
*/
export class DataOktaAuthServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_auth_server";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/auth_server okta_auth_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaAuthServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaAuthServerConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_auth_server',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audiences - computed: true, optional: false, required: false
  public get audiences() {
    return cdktf.Fn.tolist(this.getListAttribute('audiences'));
  }

  // credentials_last_rotated - computed: true, optional: false, required: false
  public get credentialsLastRotated() {
    return this.getStringAttribute('credentials_last_rotated');
  }

  // credentials_next_rotation - computed: true, optional: false, required: false
  public get credentialsNextRotation() {
    return this.getStringAttribute('credentials_next_rotation');
  }

  // credentials_rotation_mode - computed: true, optional: false, required: false
  public get credentialsRotationMode() {
    return this.getStringAttribute('credentials_rotation_mode');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // issuer_mode - computed: true, optional: false, required: false
  public get issuerMode() {
    return this.getStringAttribute('issuer_mode');
  }

  // kid - computed: true, optional: false, required: false
  public get kid() {
    return this.getStringAttribute('kid');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
