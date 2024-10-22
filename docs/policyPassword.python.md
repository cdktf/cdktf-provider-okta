# `policyPassword` Submodule <a name="`policyPassword` Submodule" id="@cdktf/provider-okta.policyPassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyPassword <a name="PolicyPassword" id="@cdktf/provider-okta.policyPassword.PolicyPassword"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password okta_policy_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_password

policyPassword.PolicyPassword(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  auth_provider: str = None,
  call_recovery: str = None,
  description: str = None,
  email_recovery: str = None,
  groups_included: typing.List[str] = None,
  id: str = None,
  password_auto_unlock_minutes: typing.Union[int, float] = None,
  password_dictionary_lookup: typing.Union[bool, IResolvable] = None,
  password_exclude_first_name: typing.Union[bool, IResolvable] = None,
  password_exclude_last_name: typing.Union[bool, IResolvable] = None,
  password_exclude_username: typing.Union[bool, IResolvable] = None,
  password_expire_warn_days: typing.Union[int, float] = None,
  password_history_count: typing.Union[int, float] = None,
  password_lockout_notification_channels: typing.List[str] = None,
  password_max_age_days: typing.Union[int, float] = None,
  password_max_lockout_attempts: typing.Union[int, float] = None,
  password_min_age_minutes: typing.Union[int, float] = None,
  password_min_length: typing.Union[int, float] = None,
  password_min_lowercase: typing.Union[int, float] = None,
  password_min_number: typing.Union[int, float] = None,
  password_min_symbol: typing.Union[int, float] = None,
  password_min_uppercase: typing.Union[int, float] = None,
  password_show_lockout_failures: typing.Union[bool, IResolvable] = None,
  priority: typing.Union[int, float] = None,
  question_min_length: typing.Union[int, float] = None,
  question_recovery: str = None,
  recovery_email_token: typing.Union[int, float] = None,
  skip_unlock: typing.Union[bool, IResolvable] = None,
  sms_recovery: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.name">name</a></code> | <code>str</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.authProvider">auth_provider</a></code> | <code>str</code> | Authentication Provider: `OKTA`, `ACTIVE_DIRECTORY` or `LDAP`. Default: `OKTA`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.callRecovery">call_recovery</a></code> | <code>str</code> | Enable or disable voice call recovery: `ACTIVE` or `INACTIVE`. Default: `INACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.description">description</a></code> | <code>str</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.emailRecovery">email_recovery</a></code> | <code>str</code> | Enable or disable email password recovery: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.groupsIncluded">groups_included</a></code> | <code>typing.List[str]</code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#id PolicyPassword#id}. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordAutoUnlockMinutes">password_auto_unlock_minutes</a></code> | <code>typing.Union[int, float]</code> | Number of minutes before a locked account is unlocked: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordDictionaryLookup">password_dictionary_lookup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Check Passwords Against Common Password Dictionary. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordExcludeFirstName">password_exclude_first_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | User firstName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordExcludeLastName">password_exclude_last_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | User lastName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordExcludeUsername">password_exclude_username</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If the user name must be excluded from the password. Default: `true`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordExpireWarnDays">password_expire_warn_days</a></code> | <code>typing.Union[int, float]</code> | Length in days a user will be warned before password expiry: 0 = no warning. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordHistoryCount">password_history_count</a></code> | <code>typing.Union[int, float]</code> | Number of distinct passwords that must be created before they can be reused: 0 = none. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordLockoutNotificationChannels">password_lockout_notification_channels</a></code> | <code>typing.List[str]</code> | Notification channels to use to notify a user when their account has been locked. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMaxAgeDays">password_max_age_days</a></code> | <code>typing.Union[int, float]</code> | Length in days a password is valid before expiry: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMaxLockoutAttempts">password_max_lockout_attempts</a></code> | <code>typing.Union[int, float]</code> | Number of unsuccessful login attempts allowed before lockout: 0 = no limit. Default: `10`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinAgeMinutes">password_min_age_minutes</a></code> | <code>typing.Union[int, float]</code> | Minimum time interval in minutes between password changes: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinLength">password_min_length</a></code> | <code>typing.Union[int, float]</code> | Minimum password length. Default: `8`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinLowercase">password_min_lowercase</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one lower case letter: 0 = no, 1 = yes. Default: `1`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinNumber">password_min_number</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one number: 0 = no, 1 = yes. Default: `1`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinSymbol">password_min_symbol</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinUppercase">password_min_uppercase</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one upper case letter: 0 = no, 1 = yes. Default: `1`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordShowLockoutFailures">password_show_lockout_failures</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If a user should be informed when their account is locked. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.questionMinLength">question_min_length</a></code> | <code>typing.Union[int, float]</code> | Min length of the password recovery question answer. Default: `4`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.questionRecovery">question_recovery</a></code> | <code>str</code> | Enable or disable security question password recovery: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.recoveryEmailToken">recovery_email_token</a></code> | <code>typing.Union[int, float]</code> | Lifetime in minutes of the recovery email token. Default: `60`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.skipUnlock">skip_unlock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.smsRecovery">sms_recovery</a></code> | <code>str</code> | Enable or disable SMS password recovery: `ACTIVE` or `INACTIVE`. Default: `INACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.status">status</a></code> | <code>str</code> | Policy Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.name"></a>

- *Type:* str

Policy Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#name PolicyPassword#name}

---

##### `auth_provider`<sup>Optional</sup> <a name="auth_provider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.authProvider"></a>

- *Type:* str

Authentication Provider: `OKTA`, `ACTIVE_DIRECTORY` or `LDAP`. Default: `OKTA`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#auth_provider PolicyPassword#auth_provider}

---

##### `call_recovery`<sup>Optional</sup> <a name="call_recovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.callRecovery"></a>

- *Type:* str

Enable or disable voice call recovery: `ACTIVE` or `INACTIVE`. Default: `INACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#call_recovery PolicyPassword#call_recovery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.description"></a>

- *Type:* str

Policy Description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#description PolicyPassword#description}

---

##### `email_recovery`<sup>Optional</sup> <a name="email_recovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.emailRecovery"></a>

- *Type:* str

Enable or disable email password recovery: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#email_recovery PolicyPassword#email_recovery}

---

##### `groups_included`<sup>Optional</sup> <a name="groups_included" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.groupsIncluded"></a>

- *Type:* typing.List[str]

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#groups_included PolicyPassword#groups_included}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#id PolicyPassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password_auto_unlock_minutes`<sup>Optional</sup> <a name="password_auto_unlock_minutes" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordAutoUnlockMinutes"></a>

- *Type:* typing.Union[int, float]

Number of minutes before a locked account is unlocked: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_auto_unlock_minutes PolicyPassword#password_auto_unlock_minutes}

---

##### `password_dictionary_lookup`<sup>Optional</sup> <a name="password_dictionary_lookup" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordDictionaryLookup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Check Passwords Against Common Password Dictionary. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_dictionary_lookup PolicyPassword#password_dictionary_lookup}

---

##### `password_exclude_first_name`<sup>Optional</sup> <a name="password_exclude_first_name" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordExcludeFirstName"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

User firstName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_exclude_first_name PolicyPassword#password_exclude_first_name}

---

##### `password_exclude_last_name`<sup>Optional</sup> <a name="password_exclude_last_name" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordExcludeLastName"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

User lastName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_exclude_last_name PolicyPassword#password_exclude_last_name}

---

##### `password_exclude_username`<sup>Optional</sup> <a name="password_exclude_username" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordExcludeUsername"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the user name must be excluded from the password. Default: `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_exclude_username PolicyPassword#password_exclude_username}

---

##### `password_expire_warn_days`<sup>Optional</sup> <a name="password_expire_warn_days" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordExpireWarnDays"></a>

- *Type:* typing.Union[int, float]

Length in days a user will be warned before password expiry: 0 = no warning. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_expire_warn_days PolicyPassword#password_expire_warn_days}

---

##### `password_history_count`<sup>Optional</sup> <a name="password_history_count" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordHistoryCount"></a>

- *Type:* typing.Union[int, float]

Number of distinct passwords that must be created before they can be reused: 0 = none. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_history_count PolicyPassword#password_history_count}

---

##### `password_lockout_notification_channels`<sup>Optional</sup> <a name="password_lockout_notification_channels" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordLockoutNotificationChannels"></a>

- *Type:* typing.List[str]

Notification channels to use to notify a user when their account has been locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_lockout_notification_channels PolicyPassword#password_lockout_notification_channels}

---

##### `password_max_age_days`<sup>Optional</sup> <a name="password_max_age_days" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMaxAgeDays"></a>

- *Type:* typing.Union[int, float]

Length in days a password is valid before expiry: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_max_age_days PolicyPassword#password_max_age_days}

---

##### `password_max_lockout_attempts`<sup>Optional</sup> <a name="password_max_lockout_attempts" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMaxLockoutAttempts"></a>

- *Type:* typing.Union[int, float]

Number of unsuccessful login attempts allowed before lockout: 0 = no limit. Default: `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_max_lockout_attempts PolicyPassword#password_max_lockout_attempts}

---

##### `password_min_age_minutes`<sup>Optional</sup> <a name="password_min_age_minutes" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinAgeMinutes"></a>

- *Type:* typing.Union[int, float]

Minimum time interval in minutes between password changes: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_age_minutes PolicyPassword#password_min_age_minutes}

---

##### `password_min_length`<sup>Optional</sup> <a name="password_min_length" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinLength"></a>

- *Type:* typing.Union[int, float]

Minimum password length. Default: `8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_length PolicyPassword#password_min_length}

---

##### `password_min_lowercase`<sup>Optional</sup> <a name="password_min_lowercase" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinLowercase"></a>

- *Type:* typing.Union[int, float]

If a password must contain at least one lower case letter: 0 = no, 1 = yes. Default: `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_lowercase PolicyPassword#password_min_lowercase}

---

##### `password_min_number`<sup>Optional</sup> <a name="password_min_number" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinNumber"></a>

- *Type:* typing.Union[int, float]

If a password must contain at least one number: 0 = no, 1 = yes. Default: `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_number PolicyPassword#password_min_number}

---

##### `password_min_symbol`<sup>Optional</sup> <a name="password_min_symbol" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinSymbol"></a>

- *Type:* typing.Union[int, float]

If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_symbol PolicyPassword#password_min_symbol}

---

##### `password_min_uppercase`<sup>Optional</sup> <a name="password_min_uppercase" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinUppercase"></a>

- *Type:* typing.Union[int, float]

If a password must contain at least one upper case letter: 0 = no, 1 = yes. Default: `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_uppercase PolicyPassword#password_min_uppercase}

---

##### `password_show_lockout_failures`<sup>Optional</sup> <a name="password_show_lockout_failures" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordShowLockoutFailures"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If a user should be informed when their account is locked. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_show_lockout_failures PolicyPassword#password_show_lockout_failures}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#priority PolicyPassword#priority}

---

##### `question_min_length`<sup>Optional</sup> <a name="question_min_length" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.questionMinLength"></a>

- *Type:* typing.Union[int, float]

Min length of the password recovery question answer. Default: `4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#question_min_length PolicyPassword#question_min_length}

---

##### `question_recovery`<sup>Optional</sup> <a name="question_recovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.questionRecovery"></a>

- *Type:* str

Enable or disable security question password recovery: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#question_recovery PolicyPassword#question_recovery}

---

##### `recovery_email_token`<sup>Optional</sup> <a name="recovery_email_token" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.recoveryEmailToken"></a>

- *Type:* typing.Union[int, float]

Lifetime in minutes of the recovery email token. Default: `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#recovery_email_token PolicyPassword#recovery_email_token}

---

##### `skip_unlock`<sup>Optional</sup> <a name="skip_unlock" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.skipUnlock"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account.

Default: `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#skip_unlock PolicyPassword#skip_unlock}

---

##### `sms_recovery`<sup>Optional</sup> <a name="sms_recovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.smsRecovery"></a>

- *Type:* str

Enable or disable SMS password recovery: `ACTIVE` or `INACTIVE`. Default: `INACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#sms_recovery PolicyPassword#sms_recovery}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.status"></a>

- *Type:* str

Policy Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#status PolicyPassword#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetAuthProvider">reset_auth_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetCallRecovery">reset_call_recovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetEmailRecovery">reset_email_recovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetGroupsIncluded">reset_groups_included</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordAutoUnlockMinutes">reset_password_auto_unlock_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordDictionaryLookup">reset_password_dictionary_lookup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeFirstName">reset_password_exclude_first_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeLastName">reset_password_exclude_last_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeUsername">reset_password_exclude_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExpireWarnDays">reset_password_expire_warn_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordHistoryCount">reset_password_history_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordLockoutNotificationChannels">reset_password_lockout_notification_channels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMaxAgeDays">reset_password_max_age_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMaxLockoutAttempts">reset_password_max_lockout_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinAgeMinutes">reset_password_min_age_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinLength">reset_password_min_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinLowercase">reset_password_min_lowercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinNumber">reset_password_min_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinSymbol">reset_password_min_symbol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinUppercase">reset_password_min_uppercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordShowLockoutFailures">reset_password_show_lockout_failures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetQuestionMinLength">reset_question_min_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetQuestionRecovery">reset_question_recovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetRecoveryEmailToken">reset_recovery_email_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetSkipUnlock">reset_skip_unlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetSmsRecovery">reset_sms_recovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyPassword.PolicyPassword.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.policyPassword.PolicyPassword.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyPassword.PolicyPassword.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyPassword.PolicyPassword.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.policyPassword.PolicyPassword.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.policyPassword.PolicyPassword.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.policyPassword.PolicyPassword.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.policyPassword.PolicyPassword.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.policyPassword.PolicyPassword.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.policyPassword.PolicyPassword.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.policyPassword.PolicyPassword.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_auth_provider` <a name="reset_auth_provider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetAuthProvider"></a>

```python
def reset_auth_provider() -> None
```

##### `reset_call_recovery` <a name="reset_call_recovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetCallRecovery"></a>

```python
def reset_call_recovery() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_email_recovery` <a name="reset_email_recovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetEmailRecovery"></a>

```python
def reset_email_recovery() -> None
```

##### `reset_groups_included` <a name="reset_groups_included" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetGroupsIncluded"></a>

```python
def reset_groups_included() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_password_auto_unlock_minutes` <a name="reset_password_auto_unlock_minutes" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordAutoUnlockMinutes"></a>

```python
def reset_password_auto_unlock_minutes() -> None
```

##### `reset_password_dictionary_lookup` <a name="reset_password_dictionary_lookup" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordDictionaryLookup"></a>

```python
def reset_password_dictionary_lookup() -> None
```

##### `reset_password_exclude_first_name` <a name="reset_password_exclude_first_name" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeFirstName"></a>

```python
def reset_password_exclude_first_name() -> None
```

##### `reset_password_exclude_last_name` <a name="reset_password_exclude_last_name" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeLastName"></a>

```python
def reset_password_exclude_last_name() -> None
```

##### `reset_password_exclude_username` <a name="reset_password_exclude_username" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeUsername"></a>

```python
def reset_password_exclude_username() -> None
```

##### `reset_password_expire_warn_days` <a name="reset_password_expire_warn_days" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExpireWarnDays"></a>

```python
def reset_password_expire_warn_days() -> None
```

##### `reset_password_history_count` <a name="reset_password_history_count" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordHistoryCount"></a>

```python
def reset_password_history_count() -> None
```

##### `reset_password_lockout_notification_channels` <a name="reset_password_lockout_notification_channels" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordLockoutNotificationChannels"></a>

```python
def reset_password_lockout_notification_channels() -> None
```

##### `reset_password_max_age_days` <a name="reset_password_max_age_days" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMaxAgeDays"></a>

```python
def reset_password_max_age_days() -> None
```

##### `reset_password_max_lockout_attempts` <a name="reset_password_max_lockout_attempts" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMaxLockoutAttempts"></a>

```python
def reset_password_max_lockout_attempts() -> None
```

##### `reset_password_min_age_minutes` <a name="reset_password_min_age_minutes" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinAgeMinutes"></a>

```python
def reset_password_min_age_minutes() -> None
```

##### `reset_password_min_length` <a name="reset_password_min_length" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinLength"></a>

```python
def reset_password_min_length() -> None
```

##### `reset_password_min_lowercase` <a name="reset_password_min_lowercase" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinLowercase"></a>

```python
def reset_password_min_lowercase() -> None
```

##### `reset_password_min_number` <a name="reset_password_min_number" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinNumber"></a>

```python
def reset_password_min_number() -> None
```

##### `reset_password_min_symbol` <a name="reset_password_min_symbol" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinSymbol"></a>

```python
def reset_password_min_symbol() -> None
```

##### `reset_password_min_uppercase` <a name="reset_password_min_uppercase" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinUppercase"></a>

```python
def reset_password_min_uppercase() -> None
```

##### `reset_password_show_lockout_failures` <a name="reset_password_show_lockout_failures" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordShowLockoutFailures"></a>

```python
def reset_password_show_lockout_failures() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_question_min_length` <a name="reset_question_min_length" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetQuestionMinLength"></a>

```python
def reset_question_min_length() -> None
```

##### `reset_question_recovery` <a name="reset_question_recovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetQuestionRecovery"></a>

```python
def reset_question_recovery() -> None
```

##### `reset_recovery_email_token` <a name="reset_recovery_email_token" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetRecoveryEmailToken"></a>

```python
def reset_recovery_email_token() -> None
```

##### `reset_skip_unlock` <a name="reset_skip_unlock" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetSkipUnlock"></a>

```python
def reset_skip_unlock() -> None
```

##### `reset_sms_recovery` <a name="reset_sms_recovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetSmsRecovery"></a>

```python
def reset_sms_recovery() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PolicyPassword resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import policy_password

policyPassword.PolicyPassword.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import policy_password

policyPassword.PolicyPassword.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import policy_password

policyPassword.PolicyPassword.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import policy_password

policyPassword.PolicyPassword.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PolicyPassword resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PolicyPassword to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PolicyPassword that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyPassword to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.authProviderInput">auth_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.callRecoveryInput">call_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.emailRecoveryInput">email_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.groupsIncludedInput">groups_included_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordAutoUnlockMinutesInput">password_auto_unlock_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordDictionaryLookupInput">password_dictionary_lookup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeFirstNameInput">password_exclude_first_name_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeLastNameInput">password_exclude_last_name_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeUsernameInput">password_exclude_username_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExpireWarnDaysInput">password_expire_warn_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordHistoryCountInput">password_history_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordLockoutNotificationChannelsInput">password_lockout_notification_channels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxAgeDaysInput">password_max_age_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxLockoutAttemptsInput">password_max_lockout_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinAgeMinutesInput">password_min_age_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLengthInput">password_min_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLowercaseInput">password_min_lowercase_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinNumberInput">password_min_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinSymbolInput">password_min_symbol_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinUppercaseInput">password_min_uppercase_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordShowLockoutFailuresInput">password_show_lockout_failures_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionMinLengthInput">question_min_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionRecoveryInput">question_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.recoveryEmailTokenInput">recovery_email_token_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.skipUnlockInput">skip_unlock_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.smsRecoveryInput">sms_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.authProvider">auth_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.callRecovery">call_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.emailRecovery">email_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.groupsIncluded">groups_included</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordAutoUnlockMinutes">password_auto_unlock_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordDictionaryLookup">password_dictionary_lookup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeFirstName">password_exclude_first_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeLastName">password_exclude_last_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeUsername">password_exclude_username</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExpireWarnDays">password_expire_warn_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordHistoryCount">password_history_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordLockoutNotificationChannels">password_lockout_notification_channels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxAgeDays">password_max_age_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxLockoutAttempts">password_max_lockout_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinAgeMinutes">password_min_age_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLength">password_min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLowercase">password_min_lowercase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinNumber">password_min_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinSymbol">password_min_symbol</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinUppercase">password_min_uppercase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordShowLockoutFailures">password_show_lockout_failures</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionMinLength">question_min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionRecovery">question_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.recoveryEmailToken">recovery_email_token</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.skipUnlock">skip_unlock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.smsRecovery">sms_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_provider_input`<sup>Optional</sup> <a name="auth_provider_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.authProviderInput"></a>

```python
auth_provider_input: str
```

- *Type:* str

---

##### `call_recovery_input`<sup>Optional</sup> <a name="call_recovery_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.callRecoveryInput"></a>

```python
call_recovery_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `email_recovery_input`<sup>Optional</sup> <a name="email_recovery_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.emailRecoveryInput"></a>

```python
email_recovery_input: str
```

- *Type:* str

---

##### `groups_included_input`<sup>Optional</sup> <a name="groups_included_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.groupsIncludedInput"></a>

```python
groups_included_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_auto_unlock_minutes_input`<sup>Optional</sup> <a name="password_auto_unlock_minutes_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordAutoUnlockMinutesInput"></a>

```python
password_auto_unlock_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_dictionary_lookup_input`<sup>Optional</sup> <a name="password_dictionary_lookup_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordDictionaryLookupInput"></a>

```python
password_dictionary_lookup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_exclude_first_name_input`<sup>Optional</sup> <a name="password_exclude_first_name_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeFirstNameInput"></a>

```python
password_exclude_first_name_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_exclude_last_name_input`<sup>Optional</sup> <a name="password_exclude_last_name_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeLastNameInput"></a>

```python
password_exclude_last_name_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_exclude_username_input`<sup>Optional</sup> <a name="password_exclude_username_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeUsernameInput"></a>

```python
password_exclude_username_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_expire_warn_days_input`<sup>Optional</sup> <a name="password_expire_warn_days_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExpireWarnDaysInput"></a>

```python
password_expire_warn_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_history_count_input`<sup>Optional</sup> <a name="password_history_count_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordHistoryCountInput"></a>

```python
password_history_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_lockout_notification_channels_input`<sup>Optional</sup> <a name="password_lockout_notification_channels_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordLockoutNotificationChannelsInput"></a>

```python
password_lockout_notification_channels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password_max_age_days_input`<sup>Optional</sup> <a name="password_max_age_days_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxAgeDaysInput"></a>

```python
password_max_age_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_max_lockout_attempts_input`<sup>Optional</sup> <a name="password_max_lockout_attempts_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxLockoutAttemptsInput"></a>

```python
password_max_lockout_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_age_minutes_input`<sup>Optional</sup> <a name="password_min_age_minutes_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinAgeMinutesInput"></a>

```python
password_min_age_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_length_input`<sup>Optional</sup> <a name="password_min_length_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLengthInput"></a>

```python
password_min_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_lowercase_input`<sup>Optional</sup> <a name="password_min_lowercase_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLowercaseInput"></a>

```python
password_min_lowercase_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_number_input`<sup>Optional</sup> <a name="password_min_number_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinNumberInput"></a>

```python
password_min_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_symbol_input`<sup>Optional</sup> <a name="password_min_symbol_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinSymbolInput"></a>

```python
password_min_symbol_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_uppercase_input`<sup>Optional</sup> <a name="password_min_uppercase_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinUppercaseInput"></a>

```python
password_min_uppercase_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_show_lockout_failures_input`<sup>Optional</sup> <a name="password_show_lockout_failures_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordShowLockoutFailuresInput"></a>

```python
password_show_lockout_failures_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `question_min_length_input`<sup>Optional</sup> <a name="question_min_length_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionMinLengthInput"></a>

```python
question_min_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `question_recovery_input`<sup>Optional</sup> <a name="question_recovery_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionRecoveryInput"></a>

```python
question_recovery_input: str
```

- *Type:* str

---

##### `recovery_email_token_input`<sup>Optional</sup> <a name="recovery_email_token_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.recoveryEmailTokenInput"></a>

```python
recovery_email_token_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skip_unlock_input`<sup>Optional</sup> <a name="skip_unlock_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.skipUnlockInput"></a>

```python
skip_unlock_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sms_recovery_input`<sup>Optional</sup> <a name="sms_recovery_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.smsRecoveryInput"></a>

```python
sms_recovery_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `auth_provider`<sup>Required</sup> <a name="auth_provider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.authProvider"></a>

```python
auth_provider: str
```

- *Type:* str

---

##### `call_recovery`<sup>Required</sup> <a name="call_recovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.callRecovery"></a>

```python
call_recovery: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `email_recovery`<sup>Required</sup> <a name="email_recovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.emailRecovery"></a>

```python
email_recovery: str
```

- *Type:* str

---

##### `groups_included`<sup>Required</sup> <a name="groups_included" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.groupsIncluded"></a>

```python
groups_included: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password_auto_unlock_minutes`<sup>Required</sup> <a name="password_auto_unlock_minutes" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordAutoUnlockMinutes"></a>

```python
password_auto_unlock_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_dictionary_lookup`<sup>Required</sup> <a name="password_dictionary_lookup" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordDictionaryLookup"></a>

```python
password_dictionary_lookup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_exclude_first_name`<sup>Required</sup> <a name="password_exclude_first_name" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeFirstName"></a>

```python
password_exclude_first_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_exclude_last_name`<sup>Required</sup> <a name="password_exclude_last_name" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeLastName"></a>

```python
password_exclude_last_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_exclude_username`<sup>Required</sup> <a name="password_exclude_username" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeUsername"></a>

```python
password_exclude_username: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_expire_warn_days`<sup>Required</sup> <a name="password_expire_warn_days" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExpireWarnDays"></a>

```python
password_expire_warn_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_history_count`<sup>Required</sup> <a name="password_history_count" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordHistoryCount"></a>

```python
password_history_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_lockout_notification_channels`<sup>Required</sup> <a name="password_lockout_notification_channels" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordLockoutNotificationChannels"></a>

```python
password_lockout_notification_channels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password_max_age_days`<sup>Required</sup> <a name="password_max_age_days" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxAgeDays"></a>

```python
password_max_age_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_max_lockout_attempts`<sup>Required</sup> <a name="password_max_lockout_attempts" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxLockoutAttempts"></a>

```python
password_max_lockout_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_age_minutes`<sup>Required</sup> <a name="password_min_age_minutes" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinAgeMinutes"></a>

```python
password_min_age_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_length`<sup>Required</sup> <a name="password_min_length" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLength"></a>

```python
password_min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_lowercase`<sup>Required</sup> <a name="password_min_lowercase" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLowercase"></a>

```python
password_min_lowercase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_number`<sup>Required</sup> <a name="password_min_number" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinNumber"></a>

```python
password_min_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_symbol`<sup>Required</sup> <a name="password_min_symbol" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinSymbol"></a>

```python
password_min_symbol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_uppercase`<sup>Required</sup> <a name="password_min_uppercase" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinUppercase"></a>

```python
password_min_uppercase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_show_lockout_failures`<sup>Required</sup> <a name="password_show_lockout_failures" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordShowLockoutFailures"></a>

```python
password_show_lockout_failures: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `question_min_length`<sup>Required</sup> <a name="question_min_length" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionMinLength"></a>

```python
question_min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `question_recovery`<sup>Required</sup> <a name="question_recovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionRecovery"></a>

```python
question_recovery: str
```

- *Type:* str

---

##### `recovery_email_token`<sup>Required</sup> <a name="recovery_email_token" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.recoveryEmailToken"></a>

```python
recovery_email_token: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skip_unlock`<sup>Required</sup> <a name="skip_unlock" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.skipUnlock"></a>

```python
skip_unlock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sms_recovery`<sup>Required</sup> <a name="sms_recovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.smsRecovery"></a>

```python
sms_recovery: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyPasswordConfig <a name="PolicyPasswordConfig" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_password

policyPassword.PolicyPasswordConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  auth_provider: str = None,
  call_recovery: str = None,
  description: str = None,
  email_recovery: str = None,
  groups_included: typing.List[str] = None,
  id: str = None,
  password_auto_unlock_minutes: typing.Union[int, float] = None,
  password_dictionary_lookup: typing.Union[bool, IResolvable] = None,
  password_exclude_first_name: typing.Union[bool, IResolvable] = None,
  password_exclude_last_name: typing.Union[bool, IResolvable] = None,
  password_exclude_username: typing.Union[bool, IResolvable] = None,
  password_expire_warn_days: typing.Union[int, float] = None,
  password_history_count: typing.Union[int, float] = None,
  password_lockout_notification_channels: typing.List[str] = None,
  password_max_age_days: typing.Union[int, float] = None,
  password_max_lockout_attempts: typing.Union[int, float] = None,
  password_min_age_minutes: typing.Union[int, float] = None,
  password_min_length: typing.Union[int, float] = None,
  password_min_lowercase: typing.Union[int, float] = None,
  password_min_number: typing.Union[int, float] = None,
  password_min_symbol: typing.Union[int, float] = None,
  password_min_uppercase: typing.Union[int, float] = None,
  password_show_lockout_failures: typing.Union[bool, IResolvable] = None,
  priority: typing.Union[int, float] = None,
  question_min_length: typing.Union[int, float] = None,
  question_recovery: str = None,
  recovery_email_token: typing.Union[int, float] = None,
  skip_unlock: typing.Union[bool, IResolvable] = None,
  sms_recovery: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.name">name</a></code> | <code>str</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.authProvider">auth_provider</a></code> | <code>str</code> | Authentication Provider: `OKTA`, `ACTIVE_DIRECTORY` or `LDAP`. Default: `OKTA`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.callRecovery">call_recovery</a></code> | <code>str</code> | Enable or disable voice call recovery: `ACTIVE` or `INACTIVE`. Default: `INACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.description">description</a></code> | <code>str</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.emailRecovery">email_recovery</a></code> | <code>str</code> | Enable or disable email password recovery: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.groupsIncluded">groups_included</a></code> | <code>typing.List[str]</code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#id PolicyPassword#id}. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordAutoUnlockMinutes">password_auto_unlock_minutes</a></code> | <code>typing.Union[int, float]</code> | Number of minutes before a locked account is unlocked: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordDictionaryLookup">password_dictionary_lookup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Check Passwords Against Common Password Dictionary. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeFirstName">password_exclude_first_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | User firstName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeLastName">password_exclude_last_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | User lastName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeUsername">password_exclude_username</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If the user name must be excluded from the password. Default: `true`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExpireWarnDays">password_expire_warn_days</a></code> | <code>typing.Union[int, float]</code> | Length in days a user will be warned before password expiry: 0 = no warning. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordHistoryCount">password_history_count</a></code> | <code>typing.Union[int, float]</code> | Number of distinct passwords that must be created before they can be reused: 0 = none. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordLockoutNotificationChannels">password_lockout_notification_channels</a></code> | <code>typing.List[str]</code> | Notification channels to use to notify a user when their account has been locked. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMaxAgeDays">password_max_age_days</a></code> | <code>typing.Union[int, float]</code> | Length in days a password is valid before expiry: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMaxLockoutAttempts">password_max_lockout_attempts</a></code> | <code>typing.Union[int, float]</code> | Number of unsuccessful login attempts allowed before lockout: 0 = no limit. Default: `10`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinAgeMinutes">password_min_age_minutes</a></code> | <code>typing.Union[int, float]</code> | Minimum time interval in minutes between password changes: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinLength">password_min_length</a></code> | <code>typing.Union[int, float]</code> | Minimum password length. Default: `8`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinLowercase">password_min_lowercase</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one lower case letter: 0 = no, 1 = yes. Default: `1`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinNumber">password_min_number</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one number: 0 = no, 1 = yes. Default: `1`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinSymbol">password_min_symbol</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinUppercase">password_min_uppercase</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one upper case letter: 0 = no, 1 = yes. Default: `1`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordShowLockoutFailures">password_show_lockout_failures</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If a user should be informed when their account is locked. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.questionMinLength">question_min_length</a></code> | <code>typing.Union[int, float]</code> | Min length of the password recovery question answer. Default: `4`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.questionRecovery">question_recovery</a></code> | <code>str</code> | Enable or disable security question password recovery: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.recoveryEmailToken">recovery_email_token</a></code> | <code>typing.Union[int, float]</code> | Lifetime in minutes of the recovery email token. Default: `60`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.skipUnlock">skip_unlock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.smsRecovery">sms_recovery</a></code> | <code>str</code> | Enable or disable SMS password recovery: `ACTIVE` or `INACTIVE`. Default: `INACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.status">status</a></code> | <code>str</code> | Policy Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Policy Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#name PolicyPassword#name}

---

##### `auth_provider`<sup>Optional</sup> <a name="auth_provider" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.authProvider"></a>

```python
auth_provider: str
```

- *Type:* str

Authentication Provider: `OKTA`, `ACTIVE_DIRECTORY` or `LDAP`. Default: `OKTA`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#auth_provider PolicyPassword#auth_provider}

---

##### `call_recovery`<sup>Optional</sup> <a name="call_recovery" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.callRecovery"></a>

```python
call_recovery: str
```

- *Type:* str

Enable or disable voice call recovery: `ACTIVE` or `INACTIVE`. Default: `INACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#call_recovery PolicyPassword#call_recovery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Policy Description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#description PolicyPassword#description}

---

##### `email_recovery`<sup>Optional</sup> <a name="email_recovery" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.emailRecovery"></a>

```python
email_recovery: str
```

- *Type:* str

Enable or disable email password recovery: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#email_recovery PolicyPassword#email_recovery}

---

##### `groups_included`<sup>Optional</sup> <a name="groups_included" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.groupsIncluded"></a>

```python
groups_included: typing.List[str]
```

- *Type:* typing.List[str]

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#groups_included PolicyPassword#groups_included}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#id PolicyPassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password_auto_unlock_minutes`<sup>Optional</sup> <a name="password_auto_unlock_minutes" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordAutoUnlockMinutes"></a>

```python
password_auto_unlock_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of minutes before a locked account is unlocked: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_auto_unlock_minutes PolicyPassword#password_auto_unlock_minutes}

---

##### `password_dictionary_lookup`<sup>Optional</sup> <a name="password_dictionary_lookup" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordDictionaryLookup"></a>

```python
password_dictionary_lookup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Check Passwords Against Common Password Dictionary. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_dictionary_lookup PolicyPassword#password_dictionary_lookup}

---

##### `password_exclude_first_name`<sup>Optional</sup> <a name="password_exclude_first_name" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeFirstName"></a>

```python
password_exclude_first_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

User firstName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_exclude_first_name PolicyPassword#password_exclude_first_name}

---

##### `password_exclude_last_name`<sup>Optional</sup> <a name="password_exclude_last_name" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeLastName"></a>

```python
password_exclude_last_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

User lastName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_exclude_last_name PolicyPassword#password_exclude_last_name}

---

##### `password_exclude_username`<sup>Optional</sup> <a name="password_exclude_username" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeUsername"></a>

```python
password_exclude_username: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the user name must be excluded from the password. Default: `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_exclude_username PolicyPassword#password_exclude_username}

---

##### `password_expire_warn_days`<sup>Optional</sup> <a name="password_expire_warn_days" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExpireWarnDays"></a>

```python
password_expire_warn_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Length in days a user will be warned before password expiry: 0 = no warning. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_expire_warn_days PolicyPassword#password_expire_warn_days}

---

##### `password_history_count`<sup>Optional</sup> <a name="password_history_count" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordHistoryCount"></a>

```python
password_history_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of distinct passwords that must be created before they can be reused: 0 = none. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_history_count PolicyPassword#password_history_count}

---

##### `password_lockout_notification_channels`<sup>Optional</sup> <a name="password_lockout_notification_channels" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordLockoutNotificationChannels"></a>

```python
password_lockout_notification_channels: typing.List[str]
```

- *Type:* typing.List[str]

Notification channels to use to notify a user when their account has been locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_lockout_notification_channels PolicyPassword#password_lockout_notification_channels}

---

##### `password_max_age_days`<sup>Optional</sup> <a name="password_max_age_days" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMaxAgeDays"></a>

```python
password_max_age_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Length in days a password is valid before expiry: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_max_age_days PolicyPassword#password_max_age_days}

---

##### `password_max_lockout_attempts`<sup>Optional</sup> <a name="password_max_lockout_attempts" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMaxLockoutAttempts"></a>

```python
password_max_lockout_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of unsuccessful login attempts allowed before lockout: 0 = no limit. Default: `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_max_lockout_attempts PolicyPassword#password_max_lockout_attempts}

---

##### `password_min_age_minutes`<sup>Optional</sup> <a name="password_min_age_minutes" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinAgeMinutes"></a>

```python
password_min_age_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum time interval in minutes between password changes: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_age_minutes PolicyPassword#password_min_age_minutes}

---

##### `password_min_length`<sup>Optional</sup> <a name="password_min_length" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinLength"></a>

```python
password_min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum password length. Default: `8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_length PolicyPassword#password_min_length}

---

##### `password_min_lowercase`<sup>Optional</sup> <a name="password_min_lowercase" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinLowercase"></a>

```python
password_min_lowercase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If a password must contain at least one lower case letter: 0 = no, 1 = yes. Default: `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_lowercase PolicyPassword#password_min_lowercase}

---

##### `password_min_number`<sup>Optional</sup> <a name="password_min_number" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinNumber"></a>

```python
password_min_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If a password must contain at least one number: 0 = no, 1 = yes. Default: `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_number PolicyPassword#password_min_number}

---

##### `password_min_symbol`<sup>Optional</sup> <a name="password_min_symbol" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinSymbol"></a>

```python
password_min_symbol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_symbol PolicyPassword#password_min_symbol}

---

##### `password_min_uppercase`<sup>Optional</sup> <a name="password_min_uppercase" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinUppercase"></a>

```python
password_min_uppercase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If a password must contain at least one upper case letter: 0 = no, 1 = yes. Default: `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_uppercase PolicyPassword#password_min_uppercase}

---

##### `password_show_lockout_failures`<sup>Optional</sup> <a name="password_show_lockout_failures" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordShowLockoutFailures"></a>

```python
password_show_lockout_failures: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If a user should be informed when their account is locked. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_show_lockout_failures PolicyPassword#password_show_lockout_failures}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#priority PolicyPassword#priority}

---

##### `question_min_length`<sup>Optional</sup> <a name="question_min_length" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.questionMinLength"></a>

```python
question_min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Min length of the password recovery question answer. Default: `4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#question_min_length PolicyPassword#question_min_length}

---

##### `question_recovery`<sup>Optional</sup> <a name="question_recovery" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.questionRecovery"></a>

```python
question_recovery: str
```

- *Type:* str

Enable or disable security question password recovery: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#question_recovery PolicyPassword#question_recovery}

---

##### `recovery_email_token`<sup>Optional</sup> <a name="recovery_email_token" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.recoveryEmailToken"></a>

```python
recovery_email_token: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Lifetime in minutes of the recovery email token. Default: `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#recovery_email_token PolicyPassword#recovery_email_token}

---

##### `skip_unlock`<sup>Optional</sup> <a name="skip_unlock" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.skipUnlock"></a>

```python
skip_unlock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account.

Default: `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#skip_unlock PolicyPassword#skip_unlock}

---

##### `sms_recovery`<sup>Optional</sup> <a name="sms_recovery" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.smsRecovery"></a>

```python
sms_recovery: str
```

- *Type:* str

Enable or disable SMS password recovery: `ACTIVE` or `INACTIVE`. Default: `INACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#sms_recovery PolicyPassword#sms_recovery}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Policy Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#status PolicyPassword#status}

---



