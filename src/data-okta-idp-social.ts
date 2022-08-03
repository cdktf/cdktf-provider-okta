// https://www.terraform.io/docs/providers/okta/d/idp_social
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaIdpSocialConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the IdP
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/idp_social#id DataOktaIdpSocial#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the IdP
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/idp_social#name DataOktaIdpSocial#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/idp_social okta_idp_social}
*/
export class DataOktaIdpSocial extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_idp_social";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/idp_social okta_idp_social} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaIdpSocialConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaIdpSocialConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_idp_social',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.33.0',
        providerVersionConstraint: '~> 3.20'
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

  // account_link_action - computed: true, optional: false, required: false
  public get accountLinkAction() {
    return this.getStringAttribute('account_link_action');
  }

  // account_link_group_include - computed: true, optional: false, required: false
  public get accountLinkGroupInclude() {
    return cdktf.Fn.tolist(this.getListAttribute('account_link_group_include'));
  }

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

  // deprovisioned_action - computed: true, optional: false, required: false
  public get deprovisionedAction() {
    return this.getStringAttribute('deprovisioned_action');
  }

  // groups_action - computed: true, optional: false, required: false
  public get groupsAction() {
    return this.getStringAttribute('groups_action');
  }

  // groups_assignment - computed: true, optional: false, required: false
  public get groupsAssignment() {
    return cdktf.Fn.tolist(this.getListAttribute('groups_assignment'));
  }

  // groups_attribute - computed: true, optional: false, required: false
  public get groupsAttribute() {
    return this.getStringAttribute('groups_attribute');
  }

  // groups_filter - computed: true, optional: false, required: false
  public get groupsFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('groups_filter'));
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

  // profile_master - computed: true, optional: false, required: false
  public get profileMaster() {
    return this.getBooleanAttribute('profile_master');
  }

  // protocol_type - computed: true, optional: false, required: false
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }

  // provisioning_action - computed: true, optional: false, required: false
  public get provisioningAction() {
    return this.getStringAttribute('provisioning_action');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subject_match_attribute - computed: true, optional: false, required: false
  public get subjectMatchAttribute() {
    return this.getStringAttribute('subject_match_attribute');
  }

  // subject_match_type - computed: true, optional: false, required: false
  public get subjectMatchType() {
    return this.getStringAttribute('subject_match_type');
  }

  // suspended_action - computed: true, optional: false, required: false
  public get suspendedAction() {
    return this.getStringAttribute('suspended_action');
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

  // username_template - computed: true, optional: false, required: false
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
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
