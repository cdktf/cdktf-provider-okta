// https://www.terraform.io/docs/providers/okta/r/app_oauth_redirect_uri
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppOauthRedirectUriConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_redirect_uri#app_id AppOauthRedirectUri#app_id}
  */
  readonly appId: string;
  /**
  * Redirect URI to append to Okta OIDC application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_redirect_uri#uri AppOauthRedirectUri#uri}
  */
  readonly uri: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_redirect_uri okta_app_oauth_redirect_uri}
*/
export class AppOauthRedirectUri extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_app_oauth_redirect_uri";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_redirect_uri okta_app_oauth_redirect_uri} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppOauthRedirectUriConfig
  */
  public constructor(scope: Construct, id: string, config: AppOauthRedirectUriConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_app_oauth_redirect_uri',
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
    this._appId = config.appId;
    this._uri = config.uri;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      uri: cdktf.stringToTerraform(this._uri),
    };
  }
}
