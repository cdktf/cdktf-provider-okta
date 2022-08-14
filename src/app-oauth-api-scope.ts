// https://www.terraform.io/docs/providers/okta/r/app_oauth_api_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppOauthApiScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_api_scope#app_id AppOauthApiScope#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_api_scope#id AppOauthApiScope#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The issuer of your Org Authorization Server, your Org URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_api_scope#issuer AppOauthApiScope#issuer}
  */
  readonly issuer: string;
  /**
  * Scopes of the application for which consent is granted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_api_scope#scopes AppOauthApiScope#scopes}
  */
  readonly scopes: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_api_scope okta_app_oauth_api_scope}
*/
export class AppOauthApiScope extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_app_oauth_api_scope";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_api_scope okta_app_oauth_api_scope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppOauthApiScopeConfig
  */
  public constructor(scope: Construct, id: string, config: AppOauthApiScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_app_oauth_api_scope',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.34.0',
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
    this._appId = config.appId;
    this._id = config.id;
    this._issuer = config.issuer;
    this._scopes = config.scopes;
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

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      id: cdktf.stringToTerraform(this._id),
      issuer: cdktf.stringToTerraform(this._issuer),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
    };
  }
}
