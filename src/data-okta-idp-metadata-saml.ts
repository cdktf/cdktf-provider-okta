// https://www.terraform.io/docs/providers/okta/d/idp_metadata_saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaIdpMetadataSamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/idp_metadata_saml#idp_id DataOktaIdpMetadataSaml#idp_id}
  */
  readonly idpId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/idp_metadata_saml okta_idp_metadata_saml}
*/
export class DataOktaIdpMetadataSaml extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_idp_metadata_saml";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/idp_metadata_saml okta_idp_metadata_saml} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaIdpMetadataSamlConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaIdpMetadataSamlConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_idp_metadata_saml',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._idpId = config.idpId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assertions_signed - computed: true, optional: false, required: false
  public get assertionsSigned() {
    return this.getBooleanAttribute('assertions_signed') as any;
  }

  // authn_request_signed - computed: true, optional: false, required: false
  public get authnRequestSigned() {
    return this.getBooleanAttribute('authn_request_signed') as any;
  }

  // encryption_certificate - computed: true, optional: false, required: false
  public get encryptionCertificate() {
    return this.getStringAttribute('encryption_certificate');
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // http_post_binding - computed: true, optional: false, required: false
  public get httpPostBinding() {
    return this.getStringAttribute('http_post_binding');
  }

  // http_redirect_binding - computed: true, optional: false, required: false
  public get httpRedirectBinding() {
    return this.getStringAttribute('http_redirect_binding');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_id - computed: false, optional: true, required: false
  private _idpId?: string; 
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }
  public set idpId(value: string) {
    this._idpId = value;
  }
  public resetIdpId() {
    this._idpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIdInput() {
    return this._idpId;
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // signing_certificate - computed: true, optional: false, required: false
  public get signingCertificate() {
    return this.getStringAttribute('signing_certificate');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      idp_id: cdktf.stringToTerraform(this._idpId),
    };
  }
}
