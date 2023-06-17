// https://registry.terraform.io/providers/okta/okta/4.0.2/docs/data-sources/auth_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaAuthServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.2/docs/data-sources/auth_server#id DataOktaAuthServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.2/docs/data-sources/auth_server#name DataOktaAuthServer#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.0.2/docs/data-sources/auth_server okta_auth_server}
*/
export class DataOktaAuthServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_auth_server";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.0.2/docs/data-sources/auth_server okta_auth_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaAuthServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaAuthServerConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_auth_server',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.0.2',
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
    this._id = config.id;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
