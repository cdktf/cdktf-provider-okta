// https://www.terraform.io/docs/providers/okta/r/auth_server_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthServerScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auth server ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope#auth_server_id AuthServerScope#auth_server_id}
  */
  readonly authServerId: string;
  /**
  * EA Feature and thus it is simply ignored if the feature is off
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope#consent AuthServerScope#consent}
  */
  readonly consent?: string;
  /**
  * A default scope will be returned in an access token when the client omits the scope parameter in a token request, provided this scope is allowed as part of the access policy rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope#default AuthServerScope#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope#description AuthServerScope#description}
  */
  readonly description?: string;
  /**
  * Name of the end user displayed in a consent dialog box
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope#display_name AuthServerScope#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope#id AuthServerScope#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to publish metadata or not, matching API type despite the fact it could just be a boolean
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope#metadata_publish AuthServerScope#metadata_publish}
  */
  readonly metadataPublish?: string;
  /**
  * Auth server scope name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope#name AuthServerScope#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope okta_auth_server_scope}
*/
export class AuthServerScope extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_auth_server_scope";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/auth_server_scope okta_auth_server_scope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthServerScopeConfig
  */
  public constructor(scope: Construct, id: string, config: AuthServerScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_auth_server_scope',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.39.0',
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
    this._authServerId = config.authServerId;
    this._consent = config.consent;
    this._default = config.default;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._metadataPublish = config.metadataPublish;
    this._name = config.name;
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

  // consent - computed: false, optional: true, required: false
  private _consent?: string; 
  public get consent() {
    return this.getStringAttribute('consent');
  }
  public set consent(value: string) {
    this._consent = value;
  }
  public resetConsent() {
    this._consent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentInput() {
    return this._consent;
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // metadata_publish - computed: false, optional: true, required: false
  private _metadataPublish?: string; 
  public get metadataPublish() {
    return this.getStringAttribute('metadata_publish');
  }
  public set metadataPublish(value: string) {
    this._metadataPublish = value;
  }
  public resetMetadataPublish() {
    this._metadataPublish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataPublishInput() {
    return this._metadataPublish;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // system - computed: true, optional: false, required: false
  public get systemAttribute() {
    return this.getBooleanAttribute('system');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_server_id: cdktf.stringToTerraform(this._authServerId),
      consent: cdktf.stringToTerraform(this._consent),
      default: cdktf.booleanToTerraform(this._default),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      metadata_publish: cdktf.stringToTerraform(this._metadataPublish),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
