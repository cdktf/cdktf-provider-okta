/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/okta/okta/4.3.0/docs/data-sources/idp_oidc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaIdpOidcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/data-sources/idp_oidc#id DataOktaIdpOidc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/data-sources/idp_oidc#name DataOktaIdpOidc#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/data-sources/idp_oidc okta_idp_oidc}
*/
export class DataOktaIdpOidc extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_idp_oidc";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/data-sources/idp_oidc okta_idp_oidc} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaIdpOidcConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaIdpOidcConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_idp_oidc',
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_binding - computed: true, optional: false, required: false
  public get authorizationBinding() {
    return this.getStringAttribute('authorization_binding');
  }

  // authorization_url - computed: true, optional: false, required: false
  public get authorizationUrl() {
    return this.getStringAttribute('authorization_url');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // id - computed: false, optional: true, required: false
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

  // issuer_mode - computed: true, optional: false, required: false
  public get issuerMode() {
    return this.getStringAttribute('issuer_mode');
  }

  // issuer_url - computed: true, optional: false, required: false
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }

  // jwks_binding - computed: true, optional: false, required: false
  public get jwksBinding() {
    return this.getStringAttribute('jwks_binding');
  }

  // jwks_url - computed: true, optional: false, required: false
  public get jwksUrl() {
    return this.getStringAttribute('jwks_url');
  }

  // max_clock_skew - computed: true, optional: false, required: false
  public get maxClockSkew() {
    return this.getNumberAttribute('max_clock_skew');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // protocol_type - computed: true, optional: false, required: false
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }

  // token_binding - computed: true, optional: false, required: false
  public get tokenBinding() {
    return this.getStringAttribute('token_binding');
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_info_binding - computed: true, optional: false, required: false
  public get userInfoBinding() {
    return this.getStringAttribute('user_info_binding');
  }

  // user_info_url - computed: true, optional: false, required: false
  public get userInfoUrl() {
    return this.getStringAttribute('user_info_url');
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
