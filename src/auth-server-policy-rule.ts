// https://www.terraform.io/docs/providers/okta/r/auth_server_policy_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthServerPolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy_rule.html#access_token_lifetime_minutes AuthServerPolicyRule#access_token_lifetime_minutes}
  */
  readonly accessTokenLifetimeMinutes?: number;
  /**
  * Auth server ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy_rule.html#auth_server_id AuthServerPolicyRule#auth_server_id}
  */
  readonly authServerId: string;
  /**
  * Accepted grant type values: authorization_code, implicit, password, client_credentials
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy_rule.html#grant_type_whitelist AuthServerPolicyRule#grant_type_whitelist}
  */
  readonly grantTypeWhitelist: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy_rule.html#group_blacklist AuthServerPolicyRule#group_blacklist}
  */
  readonly groupBlacklist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy_rule.html#group_whitelist AuthServerPolicyRule#group_whitelist}
  */
  readonly groupWhitelist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy_rule.html#inline_hook_id AuthServerPolicyRule#inline_hook_id}
  */
  readonly inlineHookId?: string;
  /**
  * Auth server policy rule name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy_rule.html#name AuthServerPolicyRule#name}
  */
  readonly name: string;
  /**
  * Auth server policy ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy_rule.html#policy_id AuthServerPolicyRule#policy_id}
  */
  readonly policyId: string;
  /**
  * Priority of the auth server policy rule
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy_rule.html#priority AuthServerPolicyRule#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy_rule.html#refresh_token_lifetime_minutes AuthServerPolicyRule#refresh_token_lifetime_minutes}
  */
  readonly refreshTokenLifetimeMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy_rule.html#refresh_token_window_minutes AuthServerPolicyRule#refresh_token_window_minutes}
  */
  readonly refreshTokenWindowMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy_rule.html#scope_whitelist AuthServerPolicyRule#scope_whitelist}
  */
  readonly scopeWhitelist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy_rule.html#status AuthServerPolicyRule#status}
  */
  readonly status?: string;
  /**
  * Auth server policy rule type, unlikely this will be anything other then the default
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy_rule.html#type AuthServerPolicyRule#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy_rule.html#user_blacklist AuthServerPolicyRule#user_blacklist}
  */
  readonly userBlacklist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy_rule.html#user_whitelist AuthServerPolicyRule#user_whitelist}
  */
  readonly userWhitelist?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy_rule.html okta_auth_server_policy_rule}
*/
export class AuthServerPolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_auth_server_policy_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/auth_server_policy_rule.html okta_auth_server_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthServerPolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AuthServerPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_auth_server_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessTokenLifetimeMinutes = config.accessTokenLifetimeMinutes;
    this._authServerId = config.authServerId;
    this._grantTypeWhitelist = config.grantTypeWhitelist;
    this._groupBlacklist = config.groupBlacklist;
    this._groupWhitelist = config.groupWhitelist;
    this._inlineHookId = config.inlineHookId;
    this._name = config.name;
    this._policyId = config.policyId;
    this._priority = config.priority;
    this._refreshTokenLifetimeMinutes = config.refreshTokenLifetimeMinutes;
    this._refreshTokenWindowMinutes = config.refreshTokenWindowMinutes;
    this._scopeWhitelist = config.scopeWhitelist;
    this._status = config.status;
    this._type = config.type;
    this._userBlacklist = config.userBlacklist;
    this._userWhitelist = config.userWhitelist;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_lifetime_minutes - computed: false, optional: true, required: false
  private _accessTokenLifetimeMinutes?: number; 
  public get accessTokenLifetimeMinutes() {
    return this.getNumberAttribute('access_token_lifetime_minutes');
  }
  public set accessTokenLifetimeMinutes(value: number) {
    this._accessTokenLifetimeMinutes = value;
  }
  public resetAccessTokenLifetimeMinutes() {
    this._accessTokenLifetimeMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenLifetimeMinutesInput() {
    return this._accessTokenLifetimeMinutes;
  }

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

  // grant_type_whitelist - computed: false, optional: false, required: true
  private _grantTypeWhitelist?: string[]; 
  public get grantTypeWhitelist() {
    return this.getListAttribute('grant_type_whitelist');
  }
  public set grantTypeWhitelist(value: string[]) {
    this._grantTypeWhitelist = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypeWhitelistInput() {
    return this._grantTypeWhitelist;
  }

  // group_blacklist - computed: false, optional: true, required: false
  private _groupBlacklist?: string[]; 
  public get groupBlacklist() {
    return this.getListAttribute('group_blacklist');
  }
  public set groupBlacklist(value: string[]) {
    this._groupBlacklist = value;
  }
  public resetGroupBlacklist() {
    this._groupBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupBlacklistInput() {
    return this._groupBlacklist;
  }

  // group_whitelist - computed: false, optional: true, required: false
  private _groupWhitelist?: string[]; 
  public get groupWhitelist() {
    return this.getListAttribute('group_whitelist');
  }
  public set groupWhitelist(value: string[]) {
    this._groupWhitelist = value;
  }
  public resetGroupWhitelist() {
    this._groupWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupWhitelistInput() {
    return this._groupWhitelist;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inline_hook_id - computed: false, optional: true, required: false
  private _inlineHookId?: string; 
  public get inlineHookId() {
    return this.getStringAttribute('inline_hook_id');
  }
  public set inlineHookId(value: string) {
    this._inlineHookId = value;
  }
  public resetInlineHookId() {
    this._inlineHookId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineHookIdInput() {
    return this._inlineHookId;
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

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // refresh_token_lifetime_minutes - computed: false, optional: true, required: false
  private _refreshTokenLifetimeMinutes?: number; 
  public get refreshTokenLifetimeMinutes() {
    return this.getNumberAttribute('refresh_token_lifetime_minutes');
  }
  public set refreshTokenLifetimeMinutes(value: number) {
    this._refreshTokenLifetimeMinutes = value;
  }
  public resetRefreshTokenLifetimeMinutes() {
    this._refreshTokenLifetimeMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenLifetimeMinutesInput() {
    return this._refreshTokenLifetimeMinutes;
  }

  // refresh_token_window_minutes - computed: false, optional: true, required: false
  private _refreshTokenWindowMinutes?: number; 
  public get refreshTokenWindowMinutes() {
    return this.getNumberAttribute('refresh_token_window_minutes');
  }
  public set refreshTokenWindowMinutes(value: number) {
    this._refreshTokenWindowMinutes = value;
  }
  public resetRefreshTokenWindowMinutes() {
    this._refreshTokenWindowMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenWindowMinutesInput() {
    return this._refreshTokenWindowMinutes;
  }

  // scope_whitelist - computed: false, optional: true, required: false
  private _scopeWhitelist?: string[]; 
  public get scopeWhitelist() {
    return this.getListAttribute('scope_whitelist');
  }
  public set scopeWhitelist(value: string[]) {
    this._scopeWhitelist = value;
  }
  public resetScopeWhitelist() {
    this._scopeWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeWhitelistInput() {
    return this._scopeWhitelist;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_blacklist - computed: false, optional: true, required: false
  private _userBlacklist?: string[]; 
  public get userBlacklist() {
    return this.getListAttribute('user_blacklist');
  }
  public set userBlacklist(value: string[]) {
    this._userBlacklist = value;
  }
  public resetUserBlacklist() {
    this._userBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userBlacklistInput() {
    return this._userBlacklist;
  }

  // user_whitelist - computed: false, optional: true, required: false
  private _userWhitelist?: string[]; 
  public get userWhitelist() {
    return this.getListAttribute('user_whitelist');
  }
  public set userWhitelist(value: string[]) {
    this._userWhitelist = value;
  }
  public resetUserWhitelist() {
    this._userWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userWhitelistInput() {
    return this._userWhitelist;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_lifetime_minutes: cdktf.numberToTerraform(this._accessTokenLifetimeMinutes),
      auth_server_id: cdktf.stringToTerraform(this._authServerId),
      grant_type_whitelist: cdktf.listMapper(cdktf.stringToTerraform)(this._grantTypeWhitelist),
      group_blacklist: cdktf.listMapper(cdktf.stringToTerraform)(this._groupBlacklist),
      group_whitelist: cdktf.listMapper(cdktf.stringToTerraform)(this._groupWhitelist),
      inline_hook_id: cdktf.stringToTerraform(this._inlineHookId),
      name: cdktf.stringToTerraform(this._name),
      policy_id: cdktf.stringToTerraform(this._policyId),
      priority: cdktf.numberToTerraform(this._priority),
      refresh_token_lifetime_minutes: cdktf.numberToTerraform(this._refreshTokenLifetimeMinutes),
      refresh_token_window_minutes: cdktf.numberToTerraform(this._refreshTokenWindowMinutes),
      scope_whitelist: cdktf.listMapper(cdktf.stringToTerraform)(this._scopeWhitelist),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      user_blacklist: cdktf.listMapper(cdktf.stringToTerraform)(this._userBlacklist),
      user_whitelist: cdktf.listMapper(cdktf.stringToTerraform)(this._userWhitelist),
    };
  }
}
