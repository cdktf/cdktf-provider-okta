/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/app_oauth_post_logout_redirect_uri
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppOauthPostLogoutRedirectUriConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/app_oauth_post_logout_redirect_uri#app_id AppOauthPostLogoutRedirectUri#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/app_oauth_post_logout_redirect_uri#id AppOauthPostLogoutRedirectUri#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Post Logout Redirect URI to append to Okta OIDC application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/app_oauth_post_logout_redirect_uri#uri AppOauthPostLogoutRedirectUri#uri}
  */
  readonly uri: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/app_oauth_post_logout_redirect_uri okta_app_oauth_post_logout_redirect_uri}
*/
export class AppOauthPostLogoutRedirectUri extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_app_oauth_post_logout_redirect_uri";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/app_oauth_post_logout_redirect_uri okta_app_oauth_post_logout_redirect_uri} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppOauthPostLogoutRedirectUriConfig
  */
  public constructor(scope: Construct, id: string, config: AppOauthPostLogoutRedirectUriConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_app_oauth_post_logout_redirect_uri',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.3.0',
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
    this._appId = config.appId;
    this._id = config.id;
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
      id: cdktf.stringToTerraform(this._id),
      uri: cdktf.stringToTerraform(this._uri),
    };
  }
}
