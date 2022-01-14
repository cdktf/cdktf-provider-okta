// https://www.terraform.io/docs/providers/okta/d/auth_server_claims
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaAuthServerClaimsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auth server ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/auth_server_claims#auth_server_id DataOktaAuthServerClaims#auth_server_id}
  */
  readonly authServerId: string;
}
export class DataOktaAuthServerClaimsClaims extends cdktf.ComplexComputedList {

  // always_include_in_token - computed: true, optional: false, required: false
  public get alwaysIncludeInToken() {
    return this.getBooleanAttribute('always_include_in_token') as any;
  }

  // claim_type - computed: true, optional: false, required: false
  public get claimType() {
    return this.getStringAttribute('claim_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_type - computed: true, optional: false, required: false
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/auth_server_claims okta_auth_server_claims}
*/
export class DataOktaAuthServerClaims extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_auth_server_claims";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/auth_server_claims okta_auth_server_claims} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaAuthServerClaimsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaAuthServerClaimsConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_auth_server_claims',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authServerId = config.authServerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // claims - computed: true, optional: false, required: false
  public claims(index: string) {
    return new DataOktaAuthServerClaimsClaims(this, 'claims', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_server_id: cdktf.stringToTerraform(this._authServerId),
    };
  }
}
