// https://www.terraform.io/docs/providers/okta/d/app_oauth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaAppOauthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Search only ACTIVE applications.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/app_oauth#active_only DataOktaAppOauth#active_only}
  */
  readonly activeOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/app_oauth#id DataOktaAppOauth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/app_oauth#label DataOktaAppOauth#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/app_oauth#label_prefix DataOktaAppOauth#label_prefix}
  */
  readonly labelPrefix?: string;
  /**
  * Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/app_oauth#skip_groups DataOktaAppOauth#skip_groups}
  */
  readonly skipGroups?: boolean | cdktf.IResolvable;
  /**
  * Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/app_oauth#skip_users DataOktaAppOauth#skip_users}
  */
  readonly skipUsers?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/app_oauth okta_app_oauth}
*/
export class DataOktaAppOauth extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_app_oauth";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/app_oauth okta_app_oauth} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaAppOauthConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaAppOauthConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_app_oauth',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.31.0',
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
    this._activeOnly = config.activeOnly;
    this._id = config.id;
    this._label = config.label;
    this._labelPrefix = config.labelPrefix;
    this._skipGroups = config.skipGroups;
    this._skipUsers = config.skipUsers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_only - computed: false, optional: true, required: false
  private _activeOnly?: boolean | cdktf.IResolvable; 
  public get activeOnly() {
    return this.getBooleanAttribute('active_only');
  }
  public set activeOnly(value: boolean | cdktf.IResolvable) {
    this._activeOnly = value;
  }
  public resetActiveOnly() {
    this._activeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeOnlyInput() {
    return this._activeOnly;
  }

  // auto_submit_toolbar - computed: true, optional: false, required: false
  public get autoSubmitToolbar() {
    return this.getBooleanAttribute('auto_submit_toolbar');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_uri - computed: true, optional: false, required: false
  public get clientUri() {
    return this.getStringAttribute('client_uri');
  }

  // grant_types - computed: true, optional: false, required: false
  public get grantTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('grant_types'));
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }

  // hide_ios - computed: true, optional: false, required: false
  public get hideIos() {
    return this.getBooleanAttribute('hide_ios');
  }

  // hide_web - computed: true, optional: false, required: false
  public get hideWeb() {
    return this.getBooleanAttribute('hide_web');
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // label_prefix - computed: false, optional: true, required: false
  private _labelPrefix?: string; 
  public get labelPrefix() {
    return this.getStringAttribute('label_prefix');
  }
  public set labelPrefix(value: string) {
    this._labelPrefix = value;
  }
  public resetLabelPrefix() {
    this._labelPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelPrefixInput() {
    return this._labelPrefix;
  }

  // links - computed: true, optional: false, required: false
  public get links() {
    return this.getStringAttribute('links');
  }

  // login_mode - computed: true, optional: false, required: false
  public get loginMode() {
    return this.getStringAttribute('login_mode');
  }

  // login_scopes - computed: true, optional: false, required: false
  public get loginScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('login_scopes'));
  }

  // login_uri - computed: true, optional: false, required: false
  public get loginUri() {
    return this.getStringAttribute('login_uri');
  }

  // logo_uri - computed: true, optional: false, required: false
  public get logoUri() {
    return this.getStringAttribute('logo_uri');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_uri - computed: true, optional: false, required: false
  public get policyUri() {
    return this.getStringAttribute('policy_uri');
  }

  // post_logout_redirect_uris - computed: true, optional: false, required: false
  public get postLogoutRedirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('post_logout_redirect_uris'));
  }

  // redirect_uris - computed: true, optional: false, required: false
  public get redirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('redirect_uris'));
  }

  // response_types - computed: true, optional: false, required: false
  public get responseTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('response_types'));
  }

  // skip_groups - computed: false, optional: true, required: false
  private _skipGroups?: boolean | cdktf.IResolvable; 
  public get skipGroups() {
    return this.getBooleanAttribute('skip_groups');
  }
  public set skipGroups(value: boolean | cdktf.IResolvable) {
    this._skipGroups = value;
  }
  public resetSkipGroups() {
    this._skipGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipGroupsInput() {
    return this._skipGroups;
  }

  // skip_users - computed: false, optional: true, required: false
  private _skipUsers?: boolean | cdktf.IResolvable; 
  public get skipUsers() {
    return this.getBooleanAttribute('skip_users');
  }
  public set skipUsers(value: boolean | cdktf.IResolvable) {
    this._skipUsers = value;
  }
  public resetSkipUsers() {
    this._skipUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUsersInput() {
    return this._skipUsers;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }

  // wildcard_redirect - computed: true, optional: false, required: false
  public get wildcardRedirect() {
    return this.getStringAttribute('wildcard_redirect');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_only: cdktf.booleanToTerraform(this._activeOnly),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      label_prefix: cdktf.stringToTerraform(this._labelPrefix),
      skip_groups: cdktf.booleanToTerraform(this._skipGroups),
      skip_users: cdktf.booleanToTerraform(this._skipUsers),
    };
  }
}
