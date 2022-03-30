// https://www.terraform.io/docs/providers/okta/d/auth_server_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaAuthServerPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auth server ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/auth_server_policy#auth_server_id DataOktaAuthServerPolicy#auth_server_id}
  */
  readonly authServerId: string;
  /**
  * Name of the policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/auth_server_policy#name DataOktaAuthServerPolicy#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/auth_server_policy okta_auth_server_policy}
*/
export class DataOktaAuthServerPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_auth_server_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/auth_server_policy okta_auth_server_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaAuthServerPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaAuthServerPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_auth_server_policy',
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
    this._authServerId = config.authServerId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_clients - computed: true, optional: false, required: false
  public get assignedClients() {
    return cdktf.Fn.tolist(this.getListAttribute('assigned_clients'));
  }

  // auth_server_id - computed: false, optional: false, required: true
  private _authServerId?: string; 
  public get authServerId() {
    return this.getStringAttribute('auth_server_id');
  }
  public set authServerId(value: string) {
    this._authServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authServerIdInput() {
    return this._authServerId;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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
      auth_server_id: cdktf.stringToTerraform(this._authServerId),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
