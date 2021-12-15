// https://www.terraform.io/docs/providers/okta/d/auth_server_scopes.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaAuthServerScopesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auth server ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/auth_server_scopes.html#auth_server_id DataOktaAuthServerScopes#auth_server_id}
  */
  readonly authServerId: string;
}
export class DataOktaAuthServerScopesScopes extends cdktf.ComplexComputedList {

  // consent - computed: true, optional: false, required: false
  public get consent() {
    return this.getStringAttribute('consent');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default') as any;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata_publish - computed: true, optional: false, required: false
  public get metadataPublish() {
    return this.getStringAttribute('metadata_publish');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // system - computed: true, optional: false, required: false
  public get systemAttribute() {
    return this.getBooleanAttribute('system') as any;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/auth_server_scopes.html okta_auth_server_scopes}
*/
export class DataOktaAuthServerScopes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_auth_server_scopes";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/auth_server_scopes.html okta_auth_server_scopes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaAuthServerScopesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaAuthServerScopesConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_auth_server_scopes',
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // scopes - computed: true, optional: false, required: false
  public scopes(index: string) {
    return new DataOktaAuthServerScopesScopes(this, 'scopes', index);
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
