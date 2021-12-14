// https://www.terraform.io/docs/providers/okta/r/idp_saml_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdpSamlKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * base64-encoded X.509 certificate chain with DER encoding
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp_saml_key.html#x5c IdpSamlKey#x5c}
  */
  readonly x5C: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/idp_saml_key.html okta_idp_saml_key}
*/
export class IdpSamlKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_idp_saml_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/idp_saml_key.html okta_idp_saml_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdpSamlKeyConfig
  */
  public constructor(scope: Construct, id: string, config: IdpSamlKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_idp_saml_key',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._x5C = config.x5C;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kid - computed: true, optional: false, required: false
  public get kid() {
    return this.getStringAttribute('kid');
  }

  // kty - computed: true, optional: false, required: false
  public get kty() {
    return this.getStringAttribute('kty');
  }

  // use - computed: true, optional: false, required: false
  public get use() {
    return this.getStringAttribute('use');
  }

  // x5c - computed: false, optional: false, required: true
  private _x5C?: string[]; 
  public get x5C() {
    return this.getListAttribute('x5c');
  }
  public set x5C(value: string[]) {
    this._x5C = value;
  }
  // Temporarily expose input value. Use with caution.
  public get x5CInput() {
    return this._x5C;
  }

  // x5t_s256 - computed: true, optional: false, required: false
  public get x5TS256() {
    return this.getStringAttribute('x5t_s256');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      x5c: cdktf.listMapper(cdktf.stringToTerraform)(this._x5C),
    };
  }
}
