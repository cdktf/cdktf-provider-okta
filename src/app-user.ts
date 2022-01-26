// https://www.terraform.io/docs/providers/okta/r/app_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * App to associate user with
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user#app_id AppUser#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user#password AppUser#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user#profile AppUser#profile}
  */
  readonly profile?: string;
  /**
  * Retain the user assignment on destroy. If set to true, the resource will be removed from state but not from the Okta app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user#retain_assignment AppUser#retain_assignment}
  */
  readonly retainAssignment?: boolean | cdktf.IResolvable;
  /**
  * User associated with the application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user#user_id AppUser#user_id}
  */
  readonly userId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user#username AppUser#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/app_user okta_app_user}
*/
export class AppUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_app_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/app_user okta_app_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppUserConfig
  */
  public constructor(scope: Construct, id: string, config: AppUserConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_app_user',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appId = config.appId;
    this._password = config.password;
    this._profile = config.profile;
    this._retainAssignment = config.retainAssignment;
    this._userId = config.userId;
    this._username = config.username;
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

  // has_shared_username - computed: true, optional: false, required: false
  public get hasSharedUsername() {
    return this.getBooleanAttribute('has_shared_username');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // retain_assignment - computed: false, optional: true, required: false
  private _retainAssignment?: boolean | cdktf.IResolvable; 
  public get retainAssignment() {
    return this.getBooleanAttribute('retain_assignment');
  }
  public set retainAssignment(value: boolean | cdktf.IResolvable) {
    this._retainAssignment = value;
  }
  public resetRetainAssignment() {
    this._retainAssignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainAssignmentInput() {
    return this._retainAssignment;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      password: cdktf.stringToTerraform(this._password),
      profile: cdktf.stringToTerraform(this._profile),
      retain_assignment: cdktf.booleanToTerraform(this._retainAssignment),
      user_id: cdktf.stringToTerraform(this._userId),
      username: cdktf.stringToTerraform(this._username),
    };
  }
}
