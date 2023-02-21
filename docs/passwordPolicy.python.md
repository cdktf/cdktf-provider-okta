# `passwordPolicy` Submodule <a name="`passwordPolicy` Submodule" id="@cdktf/provider-okta.passwordPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PasswordPolicy <a name="PasswordPolicy" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/password_policy okta_password_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import password_policy

passwordPolicy.PasswordPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
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
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.authProvider">auth_provider</a></code> | <code>str</code> | Authentication Provider: OKTA, ACTIVE_DIRECTORY or LDAP. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.callRecovery">call_recovery</a></code> | <code>str</code> | Enable or disable voice call recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.emailRecovery">email_recovery</a></code> | <code>str</code> | Enable or disable email password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.groupsIncluded">groups_included</a></code> | <code>typing.List[str]</code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#id PasswordPolicy#id}. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordAutoUnlockMinutes">password_auto_unlock_minutes</a></code> | <code>typing.Union[int, float]</code> | Number of minutes before a locked account is unlocked: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordDictionaryLookup">password_dictionary_lookup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Check Passwords Against Common Password Dictionary. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordExcludeFirstName">password_exclude_first_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | User firstName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordExcludeLastName">password_exclude_last_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | User lastName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordExcludeUsername">password_exclude_username</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If the user name must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordExpireWarnDays">password_expire_warn_days</a></code> | <code>typing.Union[int, float]</code> | Length in days a user will be warned before password expiry: 0 = no warning. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordHistoryCount">password_history_count</a></code> | <code>typing.Union[int, float]</code> | Number of distinct passwords that must be created before they can be reused: 0 = none. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordLockoutNotificationChannels">password_lockout_notification_channels</a></code> | <code>typing.List[str]</code> | Notification channels to use to notify a user when their account has been locked. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMaxAgeDays">password_max_age_days</a></code> | <code>typing.Union[int, float]</code> | Length in days a password is valid before expiry: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMaxLockoutAttempts">password_max_lockout_attempts</a></code> | <code>typing.Union[int, float]</code> | Number of unsuccessful login attempts allowed before lockout: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinAgeMinutes">password_min_age_minutes</a></code> | <code>typing.Union[int, float]</code> | Minimum time interval in minutes between password changes: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinLength">password_min_length</a></code> | <code>typing.Union[int, float]</code> | Minimum password length. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinLowercase">password_min_lowercase</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one lower case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinNumber">password_min_number</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one number: 0 = no, 1 = yes. Default = 1. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinSymbol">password_min_symbol</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = 1. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinUppercase">password_min_uppercase</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one upper case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordShowLockoutFailures">password_show_lockout_failures</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If a user should be informed when their account is locked. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.questionMinLength">question_min_length</a></code> | <code>typing.Union[int, float]</code> | Min length of the password recovery question answer. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.questionRecovery">question_recovery</a></code> | <code>str</code> | Enable or disable security question password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.recoveryEmailToken">recovery_email_token</a></code> | <code>typing.Union[int, float]</code> | Lifetime in minutes of the recovery email token. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.skipUnlock">skip_unlock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.smsRecovery">sms_recovery</a></code> | <code>str</code> | Enable or disable SMS password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.status">status</a></code> | <code>str</code> | Policy Status: ACTIVE or INACTIVE. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.name"></a>

- *Type:* str

Policy Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#name PasswordPolicy#name}

---

##### `auth_provider`<sup>Optional</sup> <a name="auth_provider" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.authProvider"></a>

- *Type:* str

Authentication Provider: OKTA, ACTIVE_DIRECTORY or LDAP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#auth_provider PasswordPolicy#auth_provider}

---

##### `call_recovery`<sup>Optional</sup> <a name="call_recovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.callRecovery"></a>

- *Type:* str

Enable or disable voice call recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#call_recovery PasswordPolicy#call_recovery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.description"></a>

- *Type:* str

Policy Description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#description PasswordPolicy#description}

---

##### `email_recovery`<sup>Optional</sup> <a name="email_recovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.emailRecovery"></a>

- *Type:* str

Enable or disable email password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#email_recovery PasswordPolicy#email_recovery}

---

##### `groups_included`<sup>Optional</sup> <a name="groups_included" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.groupsIncluded"></a>

- *Type:* typing.List[str]

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#groups_included PasswordPolicy#groups_included}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#id PasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password_auto_unlock_minutes`<sup>Optional</sup> <a name="password_auto_unlock_minutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordAutoUnlockMinutes"></a>

- *Type:* typing.Union[int, float]

Number of minutes before a locked account is unlocked: 0 = no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_auto_unlock_minutes PasswordPolicy#password_auto_unlock_minutes}

---

##### `password_dictionary_lookup`<sup>Optional</sup> <a name="password_dictionary_lookup" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordDictionaryLookup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Check Passwords Against Common Password Dictionary.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_dictionary_lookup PasswordPolicy#password_dictionary_lookup}

---

##### `password_exclude_first_name`<sup>Optional</sup> <a name="password_exclude_first_name" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordExcludeFirstName"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

User firstName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_exclude_first_name PasswordPolicy#password_exclude_first_name}

---

##### `password_exclude_last_name`<sup>Optional</sup> <a name="password_exclude_last_name" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordExcludeLastName"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

User lastName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_exclude_last_name PasswordPolicy#password_exclude_last_name}

---

##### `password_exclude_username`<sup>Optional</sup> <a name="password_exclude_username" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordExcludeUsername"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the user name must be excluded from the password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_exclude_username PasswordPolicy#password_exclude_username}

---

##### `password_expire_warn_days`<sup>Optional</sup> <a name="password_expire_warn_days" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordExpireWarnDays"></a>

- *Type:* typing.Union[int, float]

Length in days a user will be warned before password expiry: 0 = no warning.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_expire_warn_days PasswordPolicy#password_expire_warn_days}

---

##### `password_history_count`<sup>Optional</sup> <a name="password_history_count" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordHistoryCount"></a>

- *Type:* typing.Union[int, float]

Number of distinct passwords that must be created before they can be reused: 0 = none.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_history_count PasswordPolicy#password_history_count}

---

##### `password_lockout_notification_channels`<sup>Optional</sup> <a name="password_lockout_notification_channels" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordLockoutNotificationChannels"></a>

- *Type:* typing.List[str]

Notification channels to use to notify a user when their account has been locked.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_lockout_notification_channels PasswordPolicy#password_lockout_notification_channels}

---

##### `password_max_age_days`<sup>Optional</sup> <a name="password_max_age_days" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMaxAgeDays"></a>

- *Type:* typing.Union[int, float]

Length in days a password is valid before expiry: 0 = no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_max_age_days PasswordPolicy#password_max_age_days}

---

##### `password_max_lockout_attempts`<sup>Optional</sup> <a name="password_max_lockout_attempts" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMaxLockoutAttempts"></a>

- *Type:* typing.Union[int, float]

Number of unsuccessful login attempts allowed before lockout: 0 = no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_max_lockout_attempts PasswordPolicy#password_max_lockout_attempts}

---

##### `password_min_age_minutes`<sup>Optional</sup> <a name="password_min_age_minutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinAgeMinutes"></a>

- *Type:* typing.Union[int, float]

Minimum time interval in minutes between password changes: 0 = no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_age_minutes PasswordPolicy#password_min_age_minutes}

---

##### `password_min_length`<sup>Optional</sup> <a name="password_min_length" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinLength"></a>

- *Type:* typing.Union[int, float]

Minimum password length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_length PasswordPolicy#password_min_length}

---

##### `password_min_lowercase`<sup>Optional</sup> <a name="password_min_lowercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinLowercase"></a>

- *Type:* typing.Union[int, float]

If a password must contain at least one lower case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_lowercase PasswordPolicy#password_min_lowercase}

---

##### `password_min_number`<sup>Optional</sup> <a name="password_min_number" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinNumber"></a>

- *Type:* typing.Union[int, float]

If a password must contain at least one number: 0 = no, 1 = yes. Default = 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_number PasswordPolicy#password_min_number}

---

##### `password_min_symbol`<sup>Optional</sup> <a name="password_min_symbol" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinSymbol"></a>

- *Type:* typing.Union[int, float]

If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_symbol PasswordPolicy#password_min_symbol}

---

##### `password_min_uppercase`<sup>Optional</sup> <a name="password_min_uppercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordMinUppercase"></a>

- *Type:* typing.Union[int, float]

If a password must contain at least one upper case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_uppercase PasswordPolicy#password_min_uppercase}

---

##### `password_show_lockout_failures`<sup>Optional</sup> <a name="password_show_lockout_failures" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.passwordShowLockoutFailures"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If a user should be informed when their account is locked.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_show_lockout_failures PasswordPolicy#password_show_lockout_failures}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#priority PasswordPolicy#priority}

---

##### `question_min_length`<sup>Optional</sup> <a name="question_min_length" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.questionMinLength"></a>

- *Type:* typing.Union[int, float]

Min length of the password recovery question answer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#question_min_length PasswordPolicy#question_min_length}

---

##### `question_recovery`<sup>Optional</sup> <a name="question_recovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.questionRecovery"></a>

- *Type:* str

Enable or disable security question password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#question_recovery PasswordPolicy#question_recovery}

---

##### `recovery_email_token`<sup>Optional</sup> <a name="recovery_email_token" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.recoveryEmailToken"></a>

- *Type:* typing.Union[int, float]

Lifetime in minutes of the recovery email token.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#recovery_email_token PasswordPolicy#recovery_email_token}

---

##### `skip_unlock`<sup>Optional</sup> <a name="skip_unlock" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.skipUnlock"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#skip_unlock PasswordPolicy#skip_unlock}

---

##### `sms_recovery`<sup>Optional</sup> <a name="sms_recovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.smsRecovery"></a>

- *Type:* str

Enable or disable SMS password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#sms_recovery PasswordPolicy#sms_recovery}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.Initializer.parameter.status"></a>

- *Type:* str

Policy Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#status PasswordPolicy#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetAuthProvider">reset_auth_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetCallRecovery">reset_call_recovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetEmailRecovery">reset_email_recovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetGroupsIncluded">reset_groups_included</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordAutoUnlockMinutes">reset_password_auto_unlock_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordDictionaryLookup">reset_password_dictionary_lookup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExcludeFirstName">reset_password_exclude_first_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExcludeLastName">reset_password_exclude_last_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExcludeUsername">reset_password_exclude_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExpireWarnDays">reset_password_expire_warn_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordHistoryCount">reset_password_history_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordLockoutNotificationChannels">reset_password_lockout_notification_channels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMaxAgeDays">reset_password_max_age_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMaxLockoutAttempts">reset_password_max_lockout_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinAgeMinutes">reset_password_min_age_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinLength">reset_password_min_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinLowercase">reset_password_min_lowercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinNumber">reset_password_min_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinSymbol">reset_password_min_symbol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinUppercase">reset_password_min_uppercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordShowLockoutFailures">reset_password_show_lockout_failures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetQuestionMinLength">reset_question_min_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetQuestionRecovery">reset_question_recovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetRecoveryEmailToken">reset_recovery_email_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetSkipUnlock">reset_skip_unlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetSmsRecovery">reset_sms_recovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_auth_provider` <a name="reset_auth_provider" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetAuthProvider"></a>

```python
def reset_auth_provider() -> None
```

##### `reset_call_recovery` <a name="reset_call_recovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetCallRecovery"></a>

```python
def reset_call_recovery() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_email_recovery` <a name="reset_email_recovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetEmailRecovery"></a>

```python
def reset_email_recovery() -> None
```

##### `reset_groups_included` <a name="reset_groups_included" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetGroupsIncluded"></a>

```python
def reset_groups_included() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_password_auto_unlock_minutes` <a name="reset_password_auto_unlock_minutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordAutoUnlockMinutes"></a>

```python
def reset_password_auto_unlock_minutes() -> None
```

##### `reset_password_dictionary_lookup` <a name="reset_password_dictionary_lookup" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordDictionaryLookup"></a>

```python
def reset_password_dictionary_lookup() -> None
```

##### `reset_password_exclude_first_name` <a name="reset_password_exclude_first_name" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExcludeFirstName"></a>

```python
def reset_password_exclude_first_name() -> None
```

##### `reset_password_exclude_last_name` <a name="reset_password_exclude_last_name" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExcludeLastName"></a>

```python
def reset_password_exclude_last_name() -> None
```

##### `reset_password_exclude_username` <a name="reset_password_exclude_username" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExcludeUsername"></a>

```python
def reset_password_exclude_username() -> None
```

##### `reset_password_expire_warn_days` <a name="reset_password_expire_warn_days" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordExpireWarnDays"></a>

```python
def reset_password_expire_warn_days() -> None
```

##### `reset_password_history_count` <a name="reset_password_history_count" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordHistoryCount"></a>

```python
def reset_password_history_count() -> None
```

##### `reset_password_lockout_notification_channels` <a name="reset_password_lockout_notification_channels" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordLockoutNotificationChannels"></a>

```python
def reset_password_lockout_notification_channels() -> None
```

##### `reset_password_max_age_days` <a name="reset_password_max_age_days" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMaxAgeDays"></a>

```python
def reset_password_max_age_days() -> None
```

##### `reset_password_max_lockout_attempts` <a name="reset_password_max_lockout_attempts" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMaxLockoutAttempts"></a>

```python
def reset_password_max_lockout_attempts() -> None
```

##### `reset_password_min_age_minutes` <a name="reset_password_min_age_minutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinAgeMinutes"></a>

```python
def reset_password_min_age_minutes() -> None
```

##### `reset_password_min_length` <a name="reset_password_min_length" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinLength"></a>

```python
def reset_password_min_length() -> None
```

##### `reset_password_min_lowercase` <a name="reset_password_min_lowercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinLowercase"></a>

```python
def reset_password_min_lowercase() -> None
```

##### `reset_password_min_number` <a name="reset_password_min_number" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinNumber"></a>

```python
def reset_password_min_number() -> None
```

##### `reset_password_min_symbol` <a name="reset_password_min_symbol" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinSymbol"></a>

```python
def reset_password_min_symbol() -> None
```

##### `reset_password_min_uppercase` <a name="reset_password_min_uppercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordMinUppercase"></a>

```python
def reset_password_min_uppercase() -> None
```

##### `reset_password_show_lockout_failures` <a name="reset_password_show_lockout_failures" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPasswordShowLockoutFailures"></a>

```python
def reset_password_show_lockout_failures() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_question_min_length` <a name="reset_question_min_length" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetQuestionMinLength"></a>

```python
def reset_question_min_length() -> None
```

##### `reset_question_recovery` <a name="reset_question_recovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetQuestionRecovery"></a>

```python
def reset_question_recovery() -> None
```

##### `reset_recovery_email_token` <a name="reset_recovery_email_token" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetRecoveryEmailToken"></a>

```python
def reset_recovery_email_token() -> None
```

##### `reset_skip_unlock` <a name="reset_skip_unlock" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetSkipUnlock"></a>

```python
def reset_skip_unlock() -> None
```

##### `reset_sms_recovery` <a name="reset_sms_recovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetSmsRecovery"></a>

```python
def reset_sms_recovery() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import password_policy

passwordPolicy.PasswordPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import password_policy

passwordPolicy.PasswordPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import password_policy

passwordPolicy.PasswordPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.authProviderInput">auth_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.callRecoveryInput">call_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.emailRecoveryInput">email_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.groupsIncludedInput">groups_included_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordAutoUnlockMinutesInput">password_auto_unlock_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordDictionaryLookupInput">password_dictionary_lookup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeFirstNameInput">password_exclude_first_name_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeLastNameInput">password_exclude_last_name_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeUsernameInput">password_exclude_username_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExpireWarnDaysInput">password_expire_warn_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordHistoryCountInput">password_history_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordLockoutNotificationChannelsInput">password_lockout_notification_channels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxAgeDaysInput">password_max_age_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxLockoutAttemptsInput">password_max_lockout_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinAgeMinutesInput">password_min_age_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLengthInput">password_min_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLowercaseInput">password_min_lowercase_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinNumberInput">password_min_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinSymbolInput">password_min_symbol_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinUppercaseInput">password_min_uppercase_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordShowLockoutFailuresInput">password_show_lockout_failures_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionMinLengthInput">question_min_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionRecoveryInput">question_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.recoveryEmailTokenInput">recovery_email_token_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.skipUnlockInput">skip_unlock_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.smsRecoveryInput">sms_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.authProvider">auth_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.callRecovery">call_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.emailRecovery">email_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.groupsIncluded">groups_included</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordAutoUnlockMinutes">password_auto_unlock_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordDictionaryLookup">password_dictionary_lookup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeFirstName">password_exclude_first_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeLastName">password_exclude_last_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeUsername">password_exclude_username</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExpireWarnDays">password_expire_warn_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordHistoryCount">password_history_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordLockoutNotificationChannels">password_lockout_notification_channels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxAgeDays">password_max_age_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxLockoutAttempts">password_max_lockout_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinAgeMinutes">password_min_age_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLength">password_min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLowercase">password_min_lowercase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinNumber">password_min_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinSymbol">password_min_symbol</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinUppercase">password_min_uppercase</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordShowLockoutFailures">password_show_lockout_failures</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionMinLength">question_min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionRecovery">question_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.recoveryEmailToken">recovery_email_token</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.skipUnlock">skip_unlock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.smsRecovery">sms_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_provider_input`<sup>Optional</sup> <a name="auth_provider_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.authProviderInput"></a>

```python
auth_provider_input: str
```

- *Type:* str

---

##### `call_recovery_input`<sup>Optional</sup> <a name="call_recovery_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.callRecoveryInput"></a>

```python
call_recovery_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `email_recovery_input`<sup>Optional</sup> <a name="email_recovery_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.emailRecoveryInput"></a>

```python
email_recovery_input: str
```

- *Type:* str

---

##### `groups_included_input`<sup>Optional</sup> <a name="groups_included_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.groupsIncludedInput"></a>

```python
groups_included_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_auto_unlock_minutes_input`<sup>Optional</sup> <a name="password_auto_unlock_minutes_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordAutoUnlockMinutesInput"></a>

```python
password_auto_unlock_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_dictionary_lookup_input`<sup>Optional</sup> <a name="password_dictionary_lookup_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordDictionaryLookupInput"></a>

```python
password_dictionary_lookup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_exclude_first_name_input`<sup>Optional</sup> <a name="password_exclude_first_name_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeFirstNameInput"></a>

```python
password_exclude_first_name_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_exclude_last_name_input`<sup>Optional</sup> <a name="password_exclude_last_name_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeLastNameInput"></a>

```python
password_exclude_last_name_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_exclude_username_input`<sup>Optional</sup> <a name="password_exclude_username_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeUsernameInput"></a>

```python
password_exclude_username_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_expire_warn_days_input`<sup>Optional</sup> <a name="password_expire_warn_days_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExpireWarnDaysInput"></a>

```python
password_expire_warn_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_history_count_input`<sup>Optional</sup> <a name="password_history_count_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordHistoryCountInput"></a>

```python
password_history_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_lockout_notification_channels_input`<sup>Optional</sup> <a name="password_lockout_notification_channels_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordLockoutNotificationChannelsInput"></a>

```python
password_lockout_notification_channels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password_max_age_days_input`<sup>Optional</sup> <a name="password_max_age_days_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxAgeDaysInput"></a>

```python
password_max_age_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_max_lockout_attempts_input`<sup>Optional</sup> <a name="password_max_lockout_attempts_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxLockoutAttemptsInput"></a>

```python
password_max_lockout_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_age_minutes_input`<sup>Optional</sup> <a name="password_min_age_minutes_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinAgeMinutesInput"></a>

```python
password_min_age_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_length_input`<sup>Optional</sup> <a name="password_min_length_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLengthInput"></a>

```python
password_min_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_lowercase_input`<sup>Optional</sup> <a name="password_min_lowercase_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLowercaseInput"></a>

```python
password_min_lowercase_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_number_input`<sup>Optional</sup> <a name="password_min_number_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinNumberInput"></a>

```python
password_min_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_symbol_input`<sup>Optional</sup> <a name="password_min_symbol_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinSymbolInput"></a>

```python
password_min_symbol_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_uppercase_input`<sup>Optional</sup> <a name="password_min_uppercase_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinUppercaseInput"></a>

```python
password_min_uppercase_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_show_lockout_failures_input`<sup>Optional</sup> <a name="password_show_lockout_failures_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordShowLockoutFailuresInput"></a>

```python
password_show_lockout_failures_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `question_min_length_input`<sup>Optional</sup> <a name="question_min_length_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionMinLengthInput"></a>

```python
question_min_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `question_recovery_input`<sup>Optional</sup> <a name="question_recovery_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionRecoveryInput"></a>

```python
question_recovery_input: str
```

- *Type:* str

---

##### `recovery_email_token_input`<sup>Optional</sup> <a name="recovery_email_token_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.recoveryEmailTokenInput"></a>

```python
recovery_email_token_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skip_unlock_input`<sup>Optional</sup> <a name="skip_unlock_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.skipUnlockInput"></a>

```python
skip_unlock_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sms_recovery_input`<sup>Optional</sup> <a name="sms_recovery_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.smsRecoveryInput"></a>

```python
sms_recovery_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `auth_provider`<sup>Required</sup> <a name="auth_provider" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.authProvider"></a>

```python
auth_provider: str
```

- *Type:* str

---

##### `call_recovery`<sup>Required</sup> <a name="call_recovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.callRecovery"></a>

```python
call_recovery: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `email_recovery`<sup>Required</sup> <a name="email_recovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.emailRecovery"></a>

```python
email_recovery: str
```

- *Type:* str

---

##### `groups_included`<sup>Required</sup> <a name="groups_included" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.groupsIncluded"></a>

```python
groups_included: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password_auto_unlock_minutes`<sup>Required</sup> <a name="password_auto_unlock_minutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordAutoUnlockMinutes"></a>

```python
password_auto_unlock_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_dictionary_lookup`<sup>Required</sup> <a name="password_dictionary_lookup" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordDictionaryLookup"></a>

```python
password_dictionary_lookup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_exclude_first_name`<sup>Required</sup> <a name="password_exclude_first_name" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeFirstName"></a>

```python
password_exclude_first_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_exclude_last_name`<sup>Required</sup> <a name="password_exclude_last_name" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeLastName"></a>

```python
password_exclude_last_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_exclude_username`<sup>Required</sup> <a name="password_exclude_username" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExcludeUsername"></a>

```python
password_exclude_username: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_expire_warn_days`<sup>Required</sup> <a name="password_expire_warn_days" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordExpireWarnDays"></a>

```python
password_expire_warn_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_history_count`<sup>Required</sup> <a name="password_history_count" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordHistoryCount"></a>

```python
password_history_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_lockout_notification_channels`<sup>Required</sup> <a name="password_lockout_notification_channels" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordLockoutNotificationChannels"></a>

```python
password_lockout_notification_channels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password_max_age_days`<sup>Required</sup> <a name="password_max_age_days" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxAgeDays"></a>

```python
password_max_age_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_max_lockout_attempts`<sup>Required</sup> <a name="password_max_lockout_attempts" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMaxLockoutAttempts"></a>

```python
password_max_lockout_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_age_minutes`<sup>Required</sup> <a name="password_min_age_minutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinAgeMinutes"></a>

```python
password_min_age_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_length`<sup>Required</sup> <a name="password_min_length" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLength"></a>

```python
password_min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_lowercase`<sup>Required</sup> <a name="password_min_lowercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinLowercase"></a>

```python
password_min_lowercase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_number`<sup>Required</sup> <a name="password_min_number" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinNumber"></a>

```python
password_min_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_symbol`<sup>Required</sup> <a name="password_min_symbol" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinSymbol"></a>

```python
password_min_symbol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_min_uppercase`<sup>Required</sup> <a name="password_min_uppercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordMinUppercase"></a>

```python
password_min_uppercase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_show_lockout_failures`<sup>Required</sup> <a name="password_show_lockout_failures" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.passwordShowLockoutFailures"></a>

```python
password_show_lockout_failures: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `question_min_length`<sup>Required</sup> <a name="question_min_length" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionMinLength"></a>

```python
question_min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `question_recovery`<sup>Required</sup> <a name="question_recovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.questionRecovery"></a>

```python
question_recovery: str
```

- *Type:* str

---

##### `recovery_email_token`<sup>Required</sup> <a name="recovery_email_token" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.recoveryEmailToken"></a>

```python
recovery_email_token: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skip_unlock`<sup>Required</sup> <a name="skip_unlock" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.skipUnlock"></a>

```python
skip_unlock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sms_recovery`<sup>Required</sup> <a name="sms_recovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.smsRecovery"></a>

```python
sms_recovery: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PasswordPolicyConfig <a name="PasswordPolicyConfig" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import password_policy

passwordPolicy.PasswordPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
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
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.name">name</a></code> | <code>str</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.authProvider">auth_provider</a></code> | <code>str</code> | Authentication Provider: OKTA, ACTIVE_DIRECTORY or LDAP. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.callRecovery">call_recovery</a></code> | <code>str</code> | Enable or disable voice call recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.description">description</a></code> | <code>str</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.emailRecovery">email_recovery</a></code> | <code>str</code> | Enable or disable email password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.groupsIncluded">groups_included</a></code> | <code>typing.List[str]</code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#id PasswordPolicy#id}. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordAutoUnlockMinutes">password_auto_unlock_minutes</a></code> | <code>typing.Union[int, float]</code> | Number of minutes before a locked account is unlocked: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordDictionaryLookup">password_dictionary_lookup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Check Passwords Against Common Password Dictionary. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExcludeFirstName">password_exclude_first_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | User firstName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExcludeLastName">password_exclude_last_name</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | User lastName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExcludeUsername">password_exclude_username</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If the user name must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExpireWarnDays">password_expire_warn_days</a></code> | <code>typing.Union[int, float]</code> | Length in days a user will be warned before password expiry: 0 = no warning. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordHistoryCount">password_history_count</a></code> | <code>typing.Union[int, float]</code> | Number of distinct passwords that must be created before they can be reused: 0 = none. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordLockoutNotificationChannels">password_lockout_notification_channels</a></code> | <code>typing.List[str]</code> | Notification channels to use to notify a user when their account has been locked. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMaxAgeDays">password_max_age_days</a></code> | <code>typing.Union[int, float]</code> | Length in days a password is valid before expiry: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMaxLockoutAttempts">password_max_lockout_attempts</a></code> | <code>typing.Union[int, float]</code> | Number of unsuccessful login attempts allowed before lockout: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinAgeMinutes">password_min_age_minutes</a></code> | <code>typing.Union[int, float]</code> | Minimum time interval in minutes between password changes: 0 = no limit. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinLength">password_min_length</a></code> | <code>typing.Union[int, float]</code> | Minimum password length. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinLowercase">password_min_lowercase</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one lower case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinNumber">password_min_number</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one number: 0 = no, 1 = yes. Default = 1. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinSymbol">password_min_symbol</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = 1. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinUppercase">password_min_uppercase</a></code> | <code>typing.Union[int, float]</code> | If a password must contain at least one upper case letter: 0 = no, 1 = yes. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordShowLockoutFailures">password_show_lockout_failures</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If a user should be informed when their account is locked. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.questionMinLength">question_min_length</a></code> | <code>typing.Union[int, float]</code> | Min length of the password recovery question answer. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.questionRecovery">question_recovery</a></code> | <code>str</code> | Enable or disable security question password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.recoveryEmailToken">recovery_email_token</a></code> | <code>typing.Union[int, float]</code> | Lifetime in minutes of the recovery email token. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.skipUnlock">skip_unlock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.smsRecovery">sms_recovery</a></code> | <code>str</code> | Enable or disable SMS password recovery: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.status">status</a></code> | <code>str</code> | Policy Status: ACTIVE or INACTIVE. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Policy Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#name PasswordPolicy#name}

---

##### `auth_provider`<sup>Optional</sup> <a name="auth_provider" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.authProvider"></a>

```python
auth_provider: str
```

- *Type:* str

Authentication Provider: OKTA, ACTIVE_DIRECTORY or LDAP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#auth_provider PasswordPolicy#auth_provider}

---

##### `call_recovery`<sup>Optional</sup> <a name="call_recovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.callRecovery"></a>

```python
call_recovery: str
```

- *Type:* str

Enable or disable voice call recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#call_recovery PasswordPolicy#call_recovery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Policy Description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#description PasswordPolicy#description}

---

##### `email_recovery`<sup>Optional</sup> <a name="email_recovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.emailRecovery"></a>

```python
email_recovery: str
```

- *Type:* str

Enable or disable email password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#email_recovery PasswordPolicy#email_recovery}

---

##### `groups_included`<sup>Optional</sup> <a name="groups_included" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.groupsIncluded"></a>

```python
groups_included: typing.List[str]
```

- *Type:* typing.List[str]

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#groups_included PasswordPolicy#groups_included}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#id PasswordPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password_auto_unlock_minutes`<sup>Optional</sup> <a name="password_auto_unlock_minutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordAutoUnlockMinutes"></a>

```python
password_auto_unlock_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of minutes before a locked account is unlocked: 0 = no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_auto_unlock_minutes PasswordPolicy#password_auto_unlock_minutes}

---

##### `password_dictionary_lookup`<sup>Optional</sup> <a name="password_dictionary_lookup" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordDictionaryLookup"></a>

```python
password_dictionary_lookup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Check Passwords Against Common Password Dictionary.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_dictionary_lookup PasswordPolicy#password_dictionary_lookup}

---

##### `password_exclude_first_name`<sup>Optional</sup> <a name="password_exclude_first_name" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExcludeFirstName"></a>

```python
password_exclude_first_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

User firstName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_exclude_first_name PasswordPolicy#password_exclude_first_name}

---

##### `password_exclude_last_name`<sup>Optional</sup> <a name="password_exclude_last_name" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExcludeLastName"></a>

```python
password_exclude_last_name: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

User lastName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_exclude_last_name PasswordPolicy#password_exclude_last_name}

---

##### `password_exclude_username`<sup>Optional</sup> <a name="password_exclude_username" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExcludeUsername"></a>

```python
password_exclude_username: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If the user name must be excluded from the password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_exclude_username PasswordPolicy#password_exclude_username}

---

##### `password_expire_warn_days`<sup>Optional</sup> <a name="password_expire_warn_days" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordExpireWarnDays"></a>

```python
password_expire_warn_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Length in days a user will be warned before password expiry: 0 = no warning.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_expire_warn_days PasswordPolicy#password_expire_warn_days}

---

##### `password_history_count`<sup>Optional</sup> <a name="password_history_count" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordHistoryCount"></a>

```python
password_history_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of distinct passwords that must be created before they can be reused: 0 = none.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_history_count PasswordPolicy#password_history_count}

---

##### `password_lockout_notification_channels`<sup>Optional</sup> <a name="password_lockout_notification_channels" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordLockoutNotificationChannels"></a>

```python
password_lockout_notification_channels: typing.List[str]
```

- *Type:* typing.List[str]

Notification channels to use to notify a user when their account has been locked.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_lockout_notification_channels PasswordPolicy#password_lockout_notification_channels}

---

##### `password_max_age_days`<sup>Optional</sup> <a name="password_max_age_days" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMaxAgeDays"></a>

```python
password_max_age_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Length in days a password is valid before expiry: 0 = no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_max_age_days PasswordPolicy#password_max_age_days}

---

##### `password_max_lockout_attempts`<sup>Optional</sup> <a name="password_max_lockout_attempts" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMaxLockoutAttempts"></a>

```python
password_max_lockout_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of unsuccessful login attempts allowed before lockout: 0 = no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_max_lockout_attempts PasswordPolicy#password_max_lockout_attempts}

---

##### `password_min_age_minutes`<sup>Optional</sup> <a name="password_min_age_minutes" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinAgeMinutes"></a>

```python
password_min_age_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum time interval in minutes between password changes: 0 = no limit.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_age_minutes PasswordPolicy#password_min_age_minutes}

---

##### `password_min_length`<sup>Optional</sup> <a name="password_min_length" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinLength"></a>

```python
password_min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum password length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_length PasswordPolicy#password_min_length}

---

##### `password_min_lowercase`<sup>Optional</sup> <a name="password_min_lowercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinLowercase"></a>

```python
password_min_lowercase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If a password must contain at least one lower case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_lowercase PasswordPolicy#password_min_lowercase}

---

##### `password_min_number`<sup>Optional</sup> <a name="password_min_number" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinNumber"></a>

```python
password_min_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If a password must contain at least one number: 0 = no, 1 = yes. Default = 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_number PasswordPolicy#password_min_number}

---

##### `password_min_symbol`<sup>Optional</sup> <a name="password_min_symbol" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinSymbol"></a>

```python
password_min_symbol: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default = 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_symbol PasswordPolicy#password_min_symbol}

---

##### `password_min_uppercase`<sup>Optional</sup> <a name="password_min_uppercase" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordMinUppercase"></a>

```python
password_min_uppercase: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If a password must contain at least one upper case letter: 0 = no, 1 = yes.

Default = 1

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_min_uppercase PasswordPolicy#password_min_uppercase}

---

##### `password_show_lockout_failures`<sup>Optional</sup> <a name="password_show_lockout_failures" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.passwordShowLockoutFailures"></a>

```python
password_show_lockout_failures: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If a user should be informed when their account is locked.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#password_show_lockout_failures PasswordPolicy#password_show_lockout_failures}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#priority PasswordPolicy#priority}

---

##### `question_min_length`<sup>Optional</sup> <a name="question_min_length" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.questionMinLength"></a>

```python
question_min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Min length of the password recovery question answer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#question_min_length PasswordPolicy#question_min_length}

---

##### `question_recovery`<sup>Optional</sup> <a name="question_recovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.questionRecovery"></a>

```python
question_recovery: str
```

- *Type:* str

Enable or disable security question password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#question_recovery PasswordPolicy#question_recovery}

---

##### `recovery_email_token`<sup>Optional</sup> <a name="recovery_email_token" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.recoveryEmailToken"></a>

```python
recovery_email_token: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Lifetime in minutes of the recovery email token.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#recovery_email_token PasswordPolicy#recovery_email_token}

---

##### `skip_unlock`<sup>Optional</sup> <a name="skip_unlock" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.skipUnlock"></a>

```python
skip_unlock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#skip_unlock PasswordPolicy#skip_unlock}

---

##### `sms_recovery`<sup>Optional</sup> <a name="sms_recovery" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.smsRecovery"></a>

```python
sms_recovery: str
```

- *Type:* str

Enable or disable SMS password recovery: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#sms_recovery PasswordPolicy#sms_recovery}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.passwordPolicy.PasswordPolicyConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Policy Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy#status PasswordPolicy#status}

---



