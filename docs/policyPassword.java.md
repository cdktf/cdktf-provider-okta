# `policyPassword` Submodule <a name="`policyPassword` Submodule" id="@cdktf/provider-okta.policyPassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyPassword <a name="PolicyPassword" id="@cdktf/provider-okta.policyPassword.PolicyPassword"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password okta_policy_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_password.PolicyPassword;

PolicyPassword.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .authProvider(java.lang.String)
//  .callRecovery(java.lang.String)
//  .description(java.lang.String)
//  .emailRecovery(java.lang.String)
//  .groupsIncluded(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .passwordAutoUnlockMinutes(java.lang.Number)
//  .passwordDictionaryLookup(java.lang.Boolean)
//  .passwordDictionaryLookup(IResolvable)
//  .passwordExcludeFirstName(java.lang.Boolean)
//  .passwordExcludeFirstName(IResolvable)
//  .passwordExcludeLastName(java.lang.Boolean)
//  .passwordExcludeLastName(IResolvable)
//  .passwordExcludeUsername(java.lang.Boolean)
//  .passwordExcludeUsername(IResolvable)
//  .passwordExpireWarnDays(java.lang.Number)
//  .passwordHistoryCount(java.lang.Number)
//  .passwordLockoutNotificationChannels(java.util.List<java.lang.String>)
//  .passwordMaxAgeDays(java.lang.Number)
//  .passwordMaxLockoutAttempts(java.lang.Number)
//  .passwordMinAgeMinutes(java.lang.Number)
//  .passwordMinLength(java.lang.Number)
//  .passwordMinLowercase(java.lang.Number)
//  .passwordMinNumber(java.lang.Number)
//  .passwordMinSymbol(java.lang.Number)
//  .passwordMinUppercase(java.lang.Number)
//  .passwordShowLockoutFailures(java.lang.Boolean)
//  .passwordShowLockoutFailures(IResolvable)
//  .priority(java.lang.Number)
//  .questionMinLength(java.lang.Number)
//  .questionRecovery(java.lang.String)
//  .recoveryEmailToken(java.lang.Number)
//  .skipUnlock(java.lang.Boolean)
//  .skipUnlock(IResolvable)
//  .smsRecovery(java.lang.String)
//  .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.authProvider">authProvider</a></code> | <code>java.lang.String</code> | Authentication Provider: `OKTA`, `ACTIVE_DIRECTORY` or `LDAP`. Default: `OKTA`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.callRecovery">callRecovery</a></code> | <code>java.lang.String</code> | Enable or disable voice call recovery: `ACTIVE` or `INACTIVE`. Default: `INACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.emailRecovery">emailRecovery</a></code> | <code>java.lang.String</code> | Enable or disable email password recovery: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.groupsIncluded">groupsIncluded</a></code> | <code>java.util.List<java.lang.String></code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#id PolicyPassword#id}. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordAutoUnlockMinutes">passwordAutoUnlockMinutes</a></code> | <code>java.lang.Number</code> | Number of minutes before a locked account is unlocked: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordDictionaryLookup">passwordDictionaryLookup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Check Passwords Against Common Password Dictionary. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordExcludeFirstName">passwordExcludeFirstName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | User firstName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordExcludeLastName">passwordExcludeLastName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | User lastName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordExcludeUsername">passwordExcludeUsername</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the user name must be excluded from the password. Default: `true`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordExpireWarnDays">passwordExpireWarnDays</a></code> | <code>java.lang.Number</code> | Length in days a user will be warned before password expiry: 0 = no warning. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordHistoryCount">passwordHistoryCount</a></code> | <code>java.lang.Number</code> | Number of distinct passwords that must be created before they can be reused: 0 = none. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordLockoutNotificationChannels">passwordLockoutNotificationChannels</a></code> | <code>java.util.List<java.lang.String></code> | Notification channels to use to notify a user when their account has been locked. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMaxAgeDays">passwordMaxAgeDays</a></code> | <code>java.lang.Number</code> | Length in days a password is valid before expiry: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMaxLockoutAttempts">passwordMaxLockoutAttempts</a></code> | <code>java.lang.Number</code> | Number of unsuccessful login attempts allowed before lockout: 0 = no limit. Default: `10`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinAgeMinutes">passwordMinAgeMinutes</a></code> | <code>java.lang.Number</code> | Minimum time interval in minutes between password changes: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinLength">passwordMinLength</a></code> | <code>java.lang.Number</code> | Minimum password length. Default: `8`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinLowercase">passwordMinLowercase</a></code> | <code>java.lang.Number</code> | If a password must contain at least one lower case letter: 0 = no, 1 = yes. Default: `1`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinNumber">passwordMinNumber</a></code> | <code>java.lang.Number</code> | If a password must contain at least one number: 0 = no, 1 = yes. Default: `1`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinSymbol">passwordMinSymbol</a></code> | <code>java.lang.Number</code> | If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinUppercase">passwordMinUppercase</a></code> | <code>java.lang.Number</code> | If a password must contain at least one upper case letter: 0 = no, 1 = yes. Default: `1`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordShowLockoutFailures">passwordShowLockoutFailures</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If a user should be informed when their account is locked. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.questionMinLength">questionMinLength</a></code> | <code>java.lang.Number</code> | Min length of the password recovery question answer. Default: `4`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.questionRecovery">questionRecovery</a></code> | <code>java.lang.String</code> | Enable or disable security question password recovery: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.recoveryEmailToken">recoveryEmailToken</a></code> | <code>java.lang.Number</code> | Lifetime in minutes of the recovery email token. Default: `60`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.skipUnlock">skipUnlock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.smsRecovery">smsRecovery</a></code> | <code>java.lang.String</code> | Enable or disable SMS password recovery: `ACTIVE` or `INACTIVE`. Default: `INACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Policy Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Policy Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#name PolicyPassword#name}

---

##### `authProvider`<sup>Optional</sup> <a name="authProvider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.authProvider"></a>

- *Type:* java.lang.String

Authentication Provider: `OKTA`, `ACTIVE_DIRECTORY` or `LDAP`. Default: `OKTA`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#auth_provider PolicyPassword#auth_provider}

---

##### `callRecovery`<sup>Optional</sup> <a name="callRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.callRecovery"></a>

- *Type:* java.lang.String

Enable or disable voice call recovery: `ACTIVE` or `INACTIVE`. Default: `INACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#call_recovery PolicyPassword#call_recovery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Policy Description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#description PolicyPassword#description}

---

##### `emailRecovery`<sup>Optional</sup> <a name="emailRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.emailRecovery"></a>

- *Type:* java.lang.String

Enable or disable email password recovery: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#email_recovery PolicyPassword#email_recovery}

---

##### `groupsIncluded`<sup>Optional</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.groupsIncluded"></a>

- *Type:* java.util.List<java.lang.String>

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#groups_included PolicyPassword#groups_included}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#id PolicyPassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `passwordAutoUnlockMinutes`<sup>Optional</sup> <a name="passwordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordAutoUnlockMinutes"></a>

- *Type:* java.lang.Number

Number of minutes before a locked account is unlocked: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_auto_unlock_minutes PolicyPassword#password_auto_unlock_minutes}

---

##### `passwordDictionaryLookup`<sup>Optional</sup> <a name="passwordDictionaryLookup" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordDictionaryLookup"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Check Passwords Against Common Password Dictionary. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_dictionary_lookup PolicyPassword#password_dictionary_lookup}

---

##### `passwordExcludeFirstName`<sup>Optional</sup> <a name="passwordExcludeFirstName" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordExcludeFirstName"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

User firstName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_exclude_first_name PolicyPassword#password_exclude_first_name}

---

##### `passwordExcludeLastName`<sup>Optional</sup> <a name="passwordExcludeLastName" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordExcludeLastName"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

User lastName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_exclude_last_name PolicyPassword#password_exclude_last_name}

---

##### `passwordExcludeUsername`<sup>Optional</sup> <a name="passwordExcludeUsername" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordExcludeUsername"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the user name must be excluded from the password. Default: `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_exclude_username PolicyPassword#password_exclude_username}

---

##### `passwordExpireWarnDays`<sup>Optional</sup> <a name="passwordExpireWarnDays" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordExpireWarnDays"></a>

- *Type:* java.lang.Number

Length in days a user will be warned before password expiry: 0 = no warning. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_expire_warn_days PolicyPassword#password_expire_warn_days}

---

##### `passwordHistoryCount`<sup>Optional</sup> <a name="passwordHistoryCount" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordHistoryCount"></a>

- *Type:* java.lang.Number

Number of distinct passwords that must be created before they can be reused: 0 = none. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_history_count PolicyPassword#password_history_count}

---

##### `passwordLockoutNotificationChannels`<sup>Optional</sup> <a name="passwordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordLockoutNotificationChannels"></a>

- *Type:* java.util.List<java.lang.String>

Notification channels to use to notify a user when their account has been locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_lockout_notification_channels PolicyPassword#password_lockout_notification_channels}

---

##### `passwordMaxAgeDays`<sup>Optional</sup> <a name="passwordMaxAgeDays" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMaxAgeDays"></a>

- *Type:* java.lang.Number

Length in days a password is valid before expiry: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_max_age_days PolicyPassword#password_max_age_days}

---

##### `passwordMaxLockoutAttempts`<sup>Optional</sup> <a name="passwordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMaxLockoutAttempts"></a>

- *Type:* java.lang.Number

Number of unsuccessful login attempts allowed before lockout: 0 = no limit. Default: `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_max_lockout_attempts PolicyPassword#password_max_lockout_attempts}

---

##### `passwordMinAgeMinutes`<sup>Optional</sup> <a name="passwordMinAgeMinutes" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinAgeMinutes"></a>

- *Type:* java.lang.Number

Minimum time interval in minutes between password changes: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_age_minutes PolicyPassword#password_min_age_minutes}

---

##### `passwordMinLength`<sup>Optional</sup> <a name="passwordMinLength" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinLength"></a>

- *Type:* java.lang.Number

Minimum password length. Default: `8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_length PolicyPassword#password_min_length}

---

##### `passwordMinLowercase`<sup>Optional</sup> <a name="passwordMinLowercase" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinLowercase"></a>

- *Type:* java.lang.Number

If a password must contain at least one lower case letter: 0 = no, 1 = yes. Default: `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_lowercase PolicyPassword#password_min_lowercase}

---

##### `passwordMinNumber`<sup>Optional</sup> <a name="passwordMinNumber" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinNumber"></a>

- *Type:* java.lang.Number

If a password must contain at least one number: 0 = no, 1 = yes. Default: `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_number PolicyPassword#password_min_number}

---

##### `passwordMinSymbol`<sup>Optional</sup> <a name="passwordMinSymbol" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinSymbol"></a>

- *Type:* java.lang.Number

If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_symbol PolicyPassword#password_min_symbol}

---

##### `passwordMinUppercase`<sup>Optional</sup> <a name="passwordMinUppercase" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordMinUppercase"></a>

- *Type:* java.lang.Number

If a password must contain at least one upper case letter: 0 = no, 1 = yes. Default: `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_uppercase PolicyPassword#password_min_uppercase}

---

##### `passwordShowLockoutFailures`<sup>Optional</sup> <a name="passwordShowLockoutFailures" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.passwordShowLockoutFailures"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If a user should be informed when their account is locked. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_show_lockout_failures PolicyPassword#password_show_lockout_failures}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#priority PolicyPassword#priority}

---

##### `questionMinLength`<sup>Optional</sup> <a name="questionMinLength" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.questionMinLength"></a>

- *Type:* java.lang.Number

Min length of the password recovery question answer. Default: `4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#question_min_length PolicyPassword#question_min_length}

---

##### `questionRecovery`<sup>Optional</sup> <a name="questionRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.questionRecovery"></a>

- *Type:* java.lang.String

Enable or disable security question password recovery: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#question_recovery PolicyPassword#question_recovery}

---

##### `recoveryEmailToken`<sup>Optional</sup> <a name="recoveryEmailToken" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.recoveryEmailToken"></a>

- *Type:* java.lang.Number

Lifetime in minutes of the recovery email token. Default: `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#recovery_email_token PolicyPassword#recovery_email_token}

---

##### `skipUnlock`<sup>Optional</sup> <a name="skipUnlock" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.skipUnlock"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account.

Default: `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#skip_unlock PolicyPassword#skip_unlock}

---

##### `smsRecovery`<sup>Optional</sup> <a name="smsRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.smsRecovery"></a>

- *Type:* java.lang.String

Enable or disable SMS password recovery: `ACTIVE` or `INACTIVE`. Default: `INACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#sms_recovery PolicyPassword#sms_recovery}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyPassword.PolicyPassword.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Policy Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#status PolicyPassword#status}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetAuthProvider">resetAuthProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetCallRecovery">resetCallRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetEmailRecovery">resetEmailRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetGroupsIncluded">resetGroupsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordAutoUnlockMinutes">resetPasswordAutoUnlockMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordDictionaryLookup">resetPasswordDictionaryLookup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeFirstName">resetPasswordExcludeFirstName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeLastName">resetPasswordExcludeLastName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeUsername">resetPasswordExcludeUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExpireWarnDays">resetPasswordExpireWarnDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordHistoryCount">resetPasswordHistoryCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordLockoutNotificationChannels">resetPasswordLockoutNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMaxAgeDays">resetPasswordMaxAgeDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMaxLockoutAttempts">resetPasswordMaxLockoutAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinAgeMinutes">resetPasswordMinAgeMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinLength">resetPasswordMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinLowercase">resetPasswordMinLowercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinNumber">resetPasswordMinNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinSymbol">resetPasswordMinSymbol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinUppercase">resetPasswordMinUppercase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordShowLockoutFailures">resetPasswordShowLockoutFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetQuestionMinLength">resetQuestionMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetQuestionRecovery">resetQuestionRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetRecoveryEmailToken">resetRecoveryEmailToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetSkipUnlock">resetSkipUnlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetSmsRecovery">resetSmsRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.policyPassword.PolicyPassword.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.policyPassword.PolicyPassword.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyPassword.PolicyPassword.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyPassword.PolicyPassword.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.policyPassword.PolicyPassword.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.policyPassword.PolicyPassword.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.policyPassword.PolicyPassword.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-okta.policyPassword.PolicyPassword.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyPassword.PolicyPassword.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-okta.policyPassword.PolicyPassword.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-okta.policyPassword.PolicyPassword.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.policyPassword.PolicyPassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAuthProvider` <a name="resetAuthProvider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetAuthProvider"></a>

```java
public void resetAuthProvider()
```

##### `resetCallRecovery` <a name="resetCallRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetCallRecovery"></a>

```java
public void resetCallRecovery()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEmailRecovery` <a name="resetEmailRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetEmailRecovery"></a>

```java
public void resetEmailRecovery()
```

##### `resetGroupsIncluded` <a name="resetGroupsIncluded" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetGroupsIncluded"></a>

```java
public void resetGroupsIncluded()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetId"></a>

```java
public void resetId()
```

##### `resetPasswordAutoUnlockMinutes` <a name="resetPasswordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordAutoUnlockMinutes"></a>

```java
public void resetPasswordAutoUnlockMinutes()
```

##### `resetPasswordDictionaryLookup` <a name="resetPasswordDictionaryLookup" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordDictionaryLookup"></a>

```java
public void resetPasswordDictionaryLookup()
```

##### `resetPasswordExcludeFirstName` <a name="resetPasswordExcludeFirstName" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeFirstName"></a>

```java
public void resetPasswordExcludeFirstName()
```

##### `resetPasswordExcludeLastName` <a name="resetPasswordExcludeLastName" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeLastName"></a>

```java
public void resetPasswordExcludeLastName()
```

##### `resetPasswordExcludeUsername` <a name="resetPasswordExcludeUsername" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExcludeUsername"></a>

```java
public void resetPasswordExcludeUsername()
```

##### `resetPasswordExpireWarnDays` <a name="resetPasswordExpireWarnDays" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordExpireWarnDays"></a>

```java
public void resetPasswordExpireWarnDays()
```

##### `resetPasswordHistoryCount` <a name="resetPasswordHistoryCount" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordHistoryCount"></a>

```java
public void resetPasswordHistoryCount()
```

##### `resetPasswordLockoutNotificationChannels` <a name="resetPasswordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordLockoutNotificationChannels"></a>

```java
public void resetPasswordLockoutNotificationChannels()
```

##### `resetPasswordMaxAgeDays` <a name="resetPasswordMaxAgeDays" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMaxAgeDays"></a>

```java
public void resetPasswordMaxAgeDays()
```

##### `resetPasswordMaxLockoutAttempts` <a name="resetPasswordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMaxLockoutAttempts"></a>

```java
public void resetPasswordMaxLockoutAttempts()
```

##### `resetPasswordMinAgeMinutes` <a name="resetPasswordMinAgeMinutes" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinAgeMinutes"></a>

```java
public void resetPasswordMinAgeMinutes()
```

##### `resetPasswordMinLength` <a name="resetPasswordMinLength" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinLength"></a>

```java
public void resetPasswordMinLength()
```

##### `resetPasswordMinLowercase` <a name="resetPasswordMinLowercase" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinLowercase"></a>

```java
public void resetPasswordMinLowercase()
```

##### `resetPasswordMinNumber` <a name="resetPasswordMinNumber" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinNumber"></a>

```java
public void resetPasswordMinNumber()
```

##### `resetPasswordMinSymbol` <a name="resetPasswordMinSymbol" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinSymbol"></a>

```java
public void resetPasswordMinSymbol()
```

##### `resetPasswordMinUppercase` <a name="resetPasswordMinUppercase" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordMinUppercase"></a>

```java
public void resetPasswordMinUppercase()
```

##### `resetPasswordShowLockoutFailures` <a name="resetPasswordShowLockoutFailures" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPasswordShowLockoutFailures"></a>

```java
public void resetPasswordShowLockoutFailures()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetQuestionMinLength` <a name="resetQuestionMinLength" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetQuestionMinLength"></a>

```java
public void resetQuestionMinLength()
```

##### `resetQuestionRecovery` <a name="resetQuestionRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetQuestionRecovery"></a>

```java
public void resetQuestionRecovery()
```

##### `resetRecoveryEmailToken` <a name="resetRecoveryEmailToken" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetRecoveryEmailToken"></a>

```java
public void resetRecoveryEmailToken()
```

##### `resetSkipUnlock` <a name="resetSkipUnlock" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetSkipUnlock"></a>

```java
public void resetSkipUnlock()
```

##### `resetSmsRecovery` <a name="resetSmsRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetSmsRecovery"></a>

```java
public void resetSmsRecovery()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.policyPassword.PolicyPassword.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicyPassword resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_password.PolicyPassword;

PolicyPassword.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_password.PolicyPassword;

PolicyPassword.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_password.PolicyPassword;

PolicyPassword.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyPassword.PolicyPassword.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_password.PolicyPassword;

PolicyPassword.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PolicyPassword.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PolicyPassword resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PolicyPassword to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PolicyPassword that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PolicyPassword to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.authProviderInput">authProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.callRecoveryInput">callRecoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.emailRecoveryInput">emailRecoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.groupsIncludedInput">groupsIncludedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordAutoUnlockMinutesInput">passwordAutoUnlockMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordDictionaryLookupInput">passwordDictionaryLookupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeFirstNameInput">passwordExcludeFirstNameInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeLastNameInput">passwordExcludeLastNameInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeUsernameInput">passwordExcludeUsernameInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExpireWarnDaysInput">passwordExpireWarnDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordHistoryCountInput">passwordHistoryCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordLockoutNotificationChannelsInput">passwordLockoutNotificationChannelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxAgeDaysInput">passwordMaxAgeDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxLockoutAttemptsInput">passwordMaxLockoutAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinAgeMinutesInput">passwordMinAgeMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLengthInput">passwordMinLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLowercaseInput">passwordMinLowercaseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinNumberInput">passwordMinNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinSymbolInput">passwordMinSymbolInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinUppercaseInput">passwordMinUppercaseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordShowLockoutFailuresInput">passwordShowLockoutFailuresInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionMinLengthInput">questionMinLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionRecoveryInput">questionRecoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.recoveryEmailTokenInput">recoveryEmailTokenInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.skipUnlockInput">skipUnlockInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.smsRecoveryInput">smsRecoveryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.authProvider">authProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.callRecovery">callRecovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.emailRecovery">emailRecovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.groupsIncluded">groupsIncluded</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordAutoUnlockMinutes">passwordAutoUnlockMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordDictionaryLookup">passwordDictionaryLookup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeFirstName">passwordExcludeFirstName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeLastName">passwordExcludeLastName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeUsername">passwordExcludeUsername</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExpireWarnDays">passwordExpireWarnDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordHistoryCount">passwordHistoryCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordLockoutNotificationChannels">passwordLockoutNotificationChannels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxAgeDays">passwordMaxAgeDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxLockoutAttempts">passwordMaxLockoutAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinAgeMinutes">passwordMinAgeMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLength">passwordMinLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLowercase">passwordMinLowercase</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinNumber">passwordMinNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinSymbol">passwordMinSymbol</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinUppercase">passwordMinUppercase</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordShowLockoutFailures">passwordShowLockoutFailures</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionMinLength">questionMinLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionRecovery">questionRecovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.recoveryEmailToken">recoveryEmailToken</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.skipUnlock">skipUnlock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.smsRecovery">smsRecovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authProviderInput`<sup>Optional</sup> <a name="authProviderInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.authProviderInput"></a>

```java
public java.lang.String getAuthProviderInput();
```

- *Type:* java.lang.String

---

##### `callRecoveryInput`<sup>Optional</sup> <a name="callRecoveryInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.callRecoveryInput"></a>

```java
public java.lang.String getCallRecoveryInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `emailRecoveryInput`<sup>Optional</sup> <a name="emailRecoveryInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.emailRecoveryInput"></a>

```java
public java.lang.String getEmailRecoveryInput();
```

- *Type:* java.lang.String

---

##### `groupsIncludedInput`<sup>Optional</sup> <a name="groupsIncludedInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.groupsIncludedInput"></a>

```java
public java.util.List<java.lang.String> getGroupsIncludedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordAutoUnlockMinutesInput`<sup>Optional</sup> <a name="passwordAutoUnlockMinutesInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordAutoUnlockMinutesInput"></a>

```java
public java.lang.Number getPasswordAutoUnlockMinutesInput();
```

- *Type:* java.lang.Number

---

##### `passwordDictionaryLookupInput`<sup>Optional</sup> <a name="passwordDictionaryLookupInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordDictionaryLookupInput"></a>

```java
public java.lang.Object getPasswordDictionaryLookupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExcludeFirstNameInput`<sup>Optional</sup> <a name="passwordExcludeFirstNameInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeFirstNameInput"></a>

```java
public java.lang.Object getPasswordExcludeFirstNameInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExcludeLastNameInput`<sup>Optional</sup> <a name="passwordExcludeLastNameInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeLastNameInput"></a>

```java
public java.lang.Object getPasswordExcludeLastNameInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExcludeUsernameInput`<sup>Optional</sup> <a name="passwordExcludeUsernameInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeUsernameInput"></a>

```java
public java.lang.Object getPasswordExcludeUsernameInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExpireWarnDaysInput`<sup>Optional</sup> <a name="passwordExpireWarnDaysInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExpireWarnDaysInput"></a>

```java
public java.lang.Number getPasswordExpireWarnDaysInput();
```

- *Type:* java.lang.Number

---

##### `passwordHistoryCountInput`<sup>Optional</sup> <a name="passwordHistoryCountInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordHistoryCountInput"></a>

```java
public java.lang.Number getPasswordHistoryCountInput();
```

- *Type:* java.lang.Number

---

##### `passwordLockoutNotificationChannelsInput`<sup>Optional</sup> <a name="passwordLockoutNotificationChannelsInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordLockoutNotificationChannelsInput"></a>

```java
public java.util.List<java.lang.String> getPasswordLockoutNotificationChannelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `passwordMaxAgeDaysInput`<sup>Optional</sup> <a name="passwordMaxAgeDaysInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxAgeDaysInput"></a>

```java
public java.lang.Number getPasswordMaxAgeDaysInput();
```

- *Type:* java.lang.Number

---

##### `passwordMaxLockoutAttemptsInput`<sup>Optional</sup> <a name="passwordMaxLockoutAttemptsInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxLockoutAttemptsInput"></a>

```java
public java.lang.Number getPasswordMaxLockoutAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `passwordMinAgeMinutesInput`<sup>Optional</sup> <a name="passwordMinAgeMinutesInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinAgeMinutesInput"></a>

```java
public java.lang.Number getPasswordMinAgeMinutesInput();
```

- *Type:* java.lang.Number

---

##### `passwordMinLengthInput`<sup>Optional</sup> <a name="passwordMinLengthInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLengthInput"></a>

```java
public java.lang.Number getPasswordMinLengthInput();
```

- *Type:* java.lang.Number

---

##### `passwordMinLowercaseInput`<sup>Optional</sup> <a name="passwordMinLowercaseInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLowercaseInput"></a>

```java
public java.lang.Number getPasswordMinLowercaseInput();
```

- *Type:* java.lang.Number

---

##### `passwordMinNumberInput`<sup>Optional</sup> <a name="passwordMinNumberInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinNumberInput"></a>

```java
public java.lang.Number getPasswordMinNumberInput();
```

- *Type:* java.lang.Number

---

##### `passwordMinSymbolInput`<sup>Optional</sup> <a name="passwordMinSymbolInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinSymbolInput"></a>

```java
public java.lang.Number getPasswordMinSymbolInput();
```

- *Type:* java.lang.Number

---

##### `passwordMinUppercaseInput`<sup>Optional</sup> <a name="passwordMinUppercaseInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinUppercaseInput"></a>

```java
public java.lang.Number getPasswordMinUppercaseInput();
```

- *Type:* java.lang.Number

---

##### `passwordShowLockoutFailuresInput`<sup>Optional</sup> <a name="passwordShowLockoutFailuresInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordShowLockoutFailuresInput"></a>

```java
public java.lang.Object getPasswordShowLockoutFailuresInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `questionMinLengthInput`<sup>Optional</sup> <a name="questionMinLengthInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionMinLengthInput"></a>

```java
public java.lang.Number getQuestionMinLengthInput();
```

- *Type:* java.lang.Number

---

##### `questionRecoveryInput`<sup>Optional</sup> <a name="questionRecoveryInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionRecoveryInput"></a>

```java
public java.lang.String getQuestionRecoveryInput();
```

- *Type:* java.lang.String

---

##### `recoveryEmailTokenInput`<sup>Optional</sup> <a name="recoveryEmailTokenInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.recoveryEmailTokenInput"></a>

```java
public java.lang.Number getRecoveryEmailTokenInput();
```

- *Type:* java.lang.Number

---

##### `skipUnlockInput`<sup>Optional</sup> <a name="skipUnlockInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.skipUnlockInput"></a>

```java
public java.lang.Object getSkipUnlockInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `smsRecoveryInput`<sup>Optional</sup> <a name="smsRecoveryInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.smsRecoveryInput"></a>

```java
public java.lang.String getSmsRecoveryInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `authProvider`<sup>Required</sup> <a name="authProvider" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.authProvider"></a>

```java
public java.lang.String getAuthProvider();
```

- *Type:* java.lang.String

---

##### `callRecovery`<sup>Required</sup> <a name="callRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.callRecovery"></a>

```java
public java.lang.String getCallRecovery();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `emailRecovery`<sup>Required</sup> <a name="emailRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.emailRecovery"></a>

```java
public java.lang.String getEmailRecovery();
```

- *Type:* java.lang.String

---

##### `groupsIncluded`<sup>Required</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.groupsIncluded"></a>

```java
public java.util.List<java.lang.String> getGroupsIncluded();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `passwordAutoUnlockMinutes`<sup>Required</sup> <a name="passwordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordAutoUnlockMinutes"></a>

```java
public java.lang.Number getPasswordAutoUnlockMinutes();
```

- *Type:* java.lang.Number

---

##### `passwordDictionaryLookup`<sup>Required</sup> <a name="passwordDictionaryLookup" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordDictionaryLookup"></a>

```java
public java.lang.Object getPasswordDictionaryLookup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExcludeFirstName`<sup>Required</sup> <a name="passwordExcludeFirstName" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeFirstName"></a>

```java
public java.lang.Object getPasswordExcludeFirstName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExcludeLastName`<sup>Required</sup> <a name="passwordExcludeLastName" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeLastName"></a>

```java
public java.lang.Object getPasswordExcludeLastName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExcludeUsername`<sup>Required</sup> <a name="passwordExcludeUsername" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExcludeUsername"></a>

```java
public java.lang.Object getPasswordExcludeUsername();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordExpireWarnDays`<sup>Required</sup> <a name="passwordExpireWarnDays" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordExpireWarnDays"></a>

```java
public java.lang.Number getPasswordExpireWarnDays();
```

- *Type:* java.lang.Number

---

##### `passwordHistoryCount`<sup>Required</sup> <a name="passwordHistoryCount" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordHistoryCount"></a>

```java
public java.lang.Number getPasswordHistoryCount();
```

- *Type:* java.lang.Number

---

##### `passwordLockoutNotificationChannels`<sup>Required</sup> <a name="passwordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordLockoutNotificationChannels"></a>

```java
public java.util.List<java.lang.String> getPasswordLockoutNotificationChannels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `passwordMaxAgeDays`<sup>Required</sup> <a name="passwordMaxAgeDays" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxAgeDays"></a>

```java
public java.lang.Number getPasswordMaxAgeDays();
```

- *Type:* java.lang.Number

---

##### `passwordMaxLockoutAttempts`<sup>Required</sup> <a name="passwordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMaxLockoutAttempts"></a>

```java
public java.lang.Number getPasswordMaxLockoutAttempts();
```

- *Type:* java.lang.Number

---

##### `passwordMinAgeMinutes`<sup>Required</sup> <a name="passwordMinAgeMinutes" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinAgeMinutes"></a>

```java
public java.lang.Number getPasswordMinAgeMinutes();
```

- *Type:* java.lang.Number

---

##### `passwordMinLength`<sup>Required</sup> <a name="passwordMinLength" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLength"></a>

```java
public java.lang.Number getPasswordMinLength();
```

- *Type:* java.lang.Number

---

##### `passwordMinLowercase`<sup>Required</sup> <a name="passwordMinLowercase" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinLowercase"></a>

```java
public java.lang.Number getPasswordMinLowercase();
```

- *Type:* java.lang.Number

---

##### `passwordMinNumber`<sup>Required</sup> <a name="passwordMinNumber" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinNumber"></a>

```java
public java.lang.Number getPasswordMinNumber();
```

- *Type:* java.lang.Number

---

##### `passwordMinSymbol`<sup>Required</sup> <a name="passwordMinSymbol" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinSymbol"></a>

```java
public java.lang.Number getPasswordMinSymbol();
```

- *Type:* java.lang.Number

---

##### `passwordMinUppercase`<sup>Required</sup> <a name="passwordMinUppercase" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordMinUppercase"></a>

```java
public java.lang.Number getPasswordMinUppercase();
```

- *Type:* java.lang.Number

---

##### `passwordShowLockoutFailures`<sup>Required</sup> <a name="passwordShowLockoutFailures" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.passwordShowLockoutFailures"></a>

```java
public java.lang.Object getPasswordShowLockoutFailures();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `questionMinLength`<sup>Required</sup> <a name="questionMinLength" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionMinLength"></a>

```java
public java.lang.Number getQuestionMinLength();
```

- *Type:* java.lang.Number

---

##### `questionRecovery`<sup>Required</sup> <a name="questionRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.questionRecovery"></a>

```java
public java.lang.String getQuestionRecovery();
```

- *Type:* java.lang.String

---

##### `recoveryEmailToken`<sup>Required</sup> <a name="recoveryEmailToken" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.recoveryEmailToken"></a>

```java
public java.lang.Number getRecoveryEmailToken();
```

- *Type:* java.lang.Number

---

##### `skipUnlock`<sup>Required</sup> <a name="skipUnlock" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.skipUnlock"></a>

```java
public java.lang.Object getSkipUnlock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `smsRecovery`<sup>Required</sup> <a name="smsRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.smsRecovery"></a>

```java
public java.lang.String getSmsRecovery();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPassword.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyPassword.PolicyPassword.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyPasswordConfig <a name="PolicyPasswordConfig" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.policy_password.PolicyPasswordConfig;

PolicyPasswordConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .authProvider(java.lang.String)
//  .callRecovery(java.lang.String)
//  .description(java.lang.String)
//  .emailRecovery(java.lang.String)
//  .groupsIncluded(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .passwordAutoUnlockMinutes(java.lang.Number)
//  .passwordDictionaryLookup(java.lang.Boolean)
//  .passwordDictionaryLookup(IResolvable)
//  .passwordExcludeFirstName(java.lang.Boolean)
//  .passwordExcludeFirstName(IResolvable)
//  .passwordExcludeLastName(java.lang.Boolean)
//  .passwordExcludeLastName(IResolvable)
//  .passwordExcludeUsername(java.lang.Boolean)
//  .passwordExcludeUsername(IResolvable)
//  .passwordExpireWarnDays(java.lang.Number)
//  .passwordHistoryCount(java.lang.Number)
//  .passwordLockoutNotificationChannels(java.util.List<java.lang.String>)
//  .passwordMaxAgeDays(java.lang.Number)
//  .passwordMaxLockoutAttempts(java.lang.Number)
//  .passwordMinAgeMinutes(java.lang.Number)
//  .passwordMinLength(java.lang.Number)
//  .passwordMinLowercase(java.lang.Number)
//  .passwordMinNumber(java.lang.Number)
//  .passwordMinSymbol(java.lang.Number)
//  .passwordMinUppercase(java.lang.Number)
//  .passwordShowLockoutFailures(java.lang.Boolean)
//  .passwordShowLockoutFailures(IResolvable)
//  .priority(java.lang.Number)
//  .questionMinLength(java.lang.Number)
//  .questionRecovery(java.lang.String)
//  .recoveryEmailToken(java.lang.Number)
//  .skipUnlock(java.lang.Boolean)
//  .skipUnlock(IResolvable)
//  .smsRecovery(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.name">name</a></code> | <code>java.lang.String</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.authProvider">authProvider</a></code> | <code>java.lang.String</code> | Authentication Provider: `OKTA`, `ACTIVE_DIRECTORY` or `LDAP`. Default: `OKTA`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.callRecovery">callRecovery</a></code> | <code>java.lang.String</code> | Enable or disable voice call recovery: `ACTIVE` or `INACTIVE`. Default: `INACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.description">description</a></code> | <code>java.lang.String</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.emailRecovery">emailRecovery</a></code> | <code>java.lang.String</code> | Enable or disable email password recovery: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.groupsIncluded">groupsIncluded</a></code> | <code>java.util.List<java.lang.String></code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#id PolicyPassword#id}. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordAutoUnlockMinutes">passwordAutoUnlockMinutes</a></code> | <code>java.lang.Number</code> | Number of minutes before a locked account is unlocked: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordDictionaryLookup">passwordDictionaryLookup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Check Passwords Against Common Password Dictionary. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeFirstName">passwordExcludeFirstName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | User firstName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeLastName">passwordExcludeLastName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | User lastName attribute must be excluded from the password. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeUsername">passwordExcludeUsername</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the user name must be excluded from the password. Default: `true`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExpireWarnDays">passwordExpireWarnDays</a></code> | <code>java.lang.Number</code> | Length in days a user will be warned before password expiry: 0 = no warning. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordHistoryCount">passwordHistoryCount</a></code> | <code>java.lang.Number</code> | Number of distinct passwords that must be created before they can be reused: 0 = none. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordLockoutNotificationChannels">passwordLockoutNotificationChannels</a></code> | <code>java.util.List<java.lang.String></code> | Notification channels to use to notify a user when their account has been locked. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMaxAgeDays">passwordMaxAgeDays</a></code> | <code>java.lang.Number</code> | Length in days a password is valid before expiry: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMaxLockoutAttempts">passwordMaxLockoutAttempts</a></code> | <code>java.lang.Number</code> | Number of unsuccessful login attempts allowed before lockout: 0 = no limit. Default: `10`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinAgeMinutes">passwordMinAgeMinutes</a></code> | <code>java.lang.Number</code> | Minimum time interval in minutes between password changes: 0 = no limit. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinLength">passwordMinLength</a></code> | <code>java.lang.Number</code> | Minimum password length. Default: `8`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinLowercase">passwordMinLowercase</a></code> | <code>java.lang.Number</code> | If a password must contain at least one lower case letter: 0 = no, 1 = yes. Default: `1`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinNumber">passwordMinNumber</a></code> | <code>java.lang.Number</code> | If a password must contain at least one number: 0 = no, 1 = yes. Default: `1`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinSymbol">passwordMinSymbol</a></code> | <code>java.lang.Number</code> | If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default: `0`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinUppercase">passwordMinUppercase</a></code> | <code>java.lang.Number</code> | If a password must contain at least one upper case letter: 0 = no, 1 = yes. Default: `1`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordShowLockoutFailures">passwordShowLockoutFailures</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If a user should be informed when their account is locked. Default: `false`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.questionMinLength">questionMinLength</a></code> | <code>java.lang.Number</code> | Min length of the password recovery question answer. Default: `4`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.questionRecovery">questionRecovery</a></code> | <code>java.lang.String</code> | Enable or disable security question password recovery: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.recoveryEmailToken">recoveryEmailToken</a></code> | <code>java.lang.Number</code> | Lifetime in minutes of the recovery email token. Default: `60`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.skipUnlock">skipUnlock</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.smsRecovery">smsRecovery</a></code> | <code>java.lang.String</code> | Enable or disable SMS password recovery: `ACTIVE` or `INACTIVE`. Default: `INACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.status">status</a></code> | <code>java.lang.String</code> | Policy Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Policy Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#name PolicyPassword#name}

---

##### `authProvider`<sup>Optional</sup> <a name="authProvider" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.authProvider"></a>

```java
public java.lang.String getAuthProvider();
```

- *Type:* java.lang.String

Authentication Provider: `OKTA`, `ACTIVE_DIRECTORY` or `LDAP`. Default: `OKTA`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#auth_provider PolicyPassword#auth_provider}

---

##### `callRecovery`<sup>Optional</sup> <a name="callRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.callRecovery"></a>

```java
public java.lang.String getCallRecovery();
```

- *Type:* java.lang.String

Enable or disable voice call recovery: `ACTIVE` or `INACTIVE`. Default: `INACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#call_recovery PolicyPassword#call_recovery}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Policy Description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#description PolicyPassword#description}

---

##### `emailRecovery`<sup>Optional</sup> <a name="emailRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.emailRecovery"></a>

```java
public java.lang.String getEmailRecovery();
```

- *Type:* java.lang.String

Enable or disable email password recovery: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#email_recovery PolicyPassword#email_recovery}

---

##### `groupsIncluded`<sup>Optional</sup> <a name="groupsIncluded" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.groupsIncluded"></a>

```java
public java.util.List<java.lang.String> getGroupsIncluded();
```

- *Type:* java.util.List<java.lang.String>

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#groups_included PolicyPassword#groups_included}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#id PolicyPassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `passwordAutoUnlockMinutes`<sup>Optional</sup> <a name="passwordAutoUnlockMinutes" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordAutoUnlockMinutes"></a>

```java
public java.lang.Number getPasswordAutoUnlockMinutes();
```

- *Type:* java.lang.Number

Number of minutes before a locked account is unlocked: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_auto_unlock_minutes PolicyPassword#password_auto_unlock_minutes}

---

##### `passwordDictionaryLookup`<sup>Optional</sup> <a name="passwordDictionaryLookup" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordDictionaryLookup"></a>

```java
public java.lang.Object getPasswordDictionaryLookup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Check Passwords Against Common Password Dictionary. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_dictionary_lookup PolicyPassword#password_dictionary_lookup}

---

##### `passwordExcludeFirstName`<sup>Optional</sup> <a name="passwordExcludeFirstName" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeFirstName"></a>

```java
public java.lang.Object getPasswordExcludeFirstName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

User firstName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_exclude_first_name PolicyPassword#password_exclude_first_name}

---

##### `passwordExcludeLastName`<sup>Optional</sup> <a name="passwordExcludeLastName" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeLastName"></a>

```java
public java.lang.Object getPasswordExcludeLastName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

User lastName attribute must be excluded from the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_exclude_last_name PolicyPassword#password_exclude_last_name}

---

##### `passwordExcludeUsername`<sup>Optional</sup> <a name="passwordExcludeUsername" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExcludeUsername"></a>

```java
public java.lang.Object getPasswordExcludeUsername();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the user name must be excluded from the password. Default: `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_exclude_username PolicyPassword#password_exclude_username}

---

##### `passwordExpireWarnDays`<sup>Optional</sup> <a name="passwordExpireWarnDays" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordExpireWarnDays"></a>

```java
public java.lang.Number getPasswordExpireWarnDays();
```

- *Type:* java.lang.Number

Length in days a user will be warned before password expiry: 0 = no warning. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_expire_warn_days PolicyPassword#password_expire_warn_days}

---

##### `passwordHistoryCount`<sup>Optional</sup> <a name="passwordHistoryCount" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordHistoryCount"></a>

```java
public java.lang.Number getPasswordHistoryCount();
```

- *Type:* java.lang.Number

Number of distinct passwords that must be created before they can be reused: 0 = none. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_history_count PolicyPassword#password_history_count}

---

##### `passwordLockoutNotificationChannels`<sup>Optional</sup> <a name="passwordLockoutNotificationChannels" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordLockoutNotificationChannels"></a>

```java
public java.util.List<java.lang.String> getPasswordLockoutNotificationChannels();
```

- *Type:* java.util.List<java.lang.String>

Notification channels to use to notify a user when their account has been locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_lockout_notification_channels PolicyPassword#password_lockout_notification_channels}

---

##### `passwordMaxAgeDays`<sup>Optional</sup> <a name="passwordMaxAgeDays" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMaxAgeDays"></a>

```java
public java.lang.Number getPasswordMaxAgeDays();
```

- *Type:* java.lang.Number

Length in days a password is valid before expiry: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_max_age_days PolicyPassword#password_max_age_days}

---

##### `passwordMaxLockoutAttempts`<sup>Optional</sup> <a name="passwordMaxLockoutAttempts" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMaxLockoutAttempts"></a>

```java
public java.lang.Number getPasswordMaxLockoutAttempts();
```

- *Type:* java.lang.Number

Number of unsuccessful login attempts allowed before lockout: 0 = no limit. Default: `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_max_lockout_attempts PolicyPassword#password_max_lockout_attempts}

---

##### `passwordMinAgeMinutes`<sup>Optional</sup> <a name="passwordMinAgeMinutes" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinAgeMinutes"></a>

```java
public java.lang.Number getPasswordMinAgeMinutes();
```

- *Type:* java.lang.Number

Minimum time interval in minutes between password changes: 0 = no limit. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_age_minutes PolicyPassword#password_min_age_minutes}

---

##### `passwordMinLength`<sup>Optional</sup> <a name="passwordMinLength" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinLength"></a>

```java
public java.lang.Number getPasswordMinLength();
```

- *Type:* java.lang.Number

Minimum password length. Default: `8`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_length PolicyPassword#password_min_length}

---

##### `passwordMinLowercase`<sup>Optional</sup> <a name="passwordMinLowercase" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinLowercase"></a>

```java
public java.lang.Number getPasswordMinLowercase();
```

- *Type:* java.lang.Number

If a password must contain at least one lower case letter: 0 = no, 1 = yes. Default: `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_lowercase PolicyPassword#password_min_lowercase}

---

##### `passwordMinNumber`<sup>Optional</sup> <a name="passwordMinNumber" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinNumber"></a>

```java
public java.lang.Number getPasswordMinNumber();
```

- *Type:* java.lang.Number

If a password must contain at least one number: 0 = no, 1 = yes. Default: `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_number PolicyPassword#password_min_number}

---

##### `passwordMinSymbol`<sup>Optional</sup> <a name="passwordMinSymbol" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinSymbol"></a>

```java
public java.lang.Number getPasswordMinSymbol();
```

- *Type:* java.lang.Number

If a password must contain at least one symbol (!@#$%^&*): 0 = no, 1 = yes. Default: `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_symbol PolicyPassword#password_min_symbol}

---

##### `passwordMinUppercase`<sup>Optional</sup> <a name="passwordMinUppercase" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordMinUppercase"></a>

```java
public java.lang.Number getPasswordMinUppercase();
```

- *Type:* java.lang.Number

If a password must contain at least one upper case letter: 0 = no, 1 = yes. Default: `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_min_uppercase PolicyPassword#password_min_uppercase}

---

##### `passwordShowLockoutFailures`<sup>Optional</sup> <a name="passwordShowLockoutFailures" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.passwordShowLockoutFailures"></a>

```java
public java.lang.Object getPasswordShowLockoutFailures();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If a user should be informed when their account is locked. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#password_show_lockout_failures PolicyPassword#password_show_lockout_failures}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#priority PolicyPassword#priority}

---

##### `questionMinLength`<sup>Optional</sup> <a name="questionMinLength" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.questionMinLength"></a>

```java
public java.lang.Number getQuestionMinLength();
```

- *Type:* java.lang.Number

Min length of the password recovery question answer. Default: `4`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#question_min_length PolicyPassword#question_min_length}

---

##### `questionRecovery`<sup>Optional</sup> <a name="questionRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.questionRecovery"></a>

```java
public java.lang.String getQuestionRecovery();
```

- *Type:* java.lang.String

Enable or disable security question password recovery: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#question_recovery PolicyPassword#question_recovery}

---

##### `recoveryEmailToken`<sup>Optional</sup> <a name="recoveryEmailToken" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.recoveryEmailToken"></a>

```java
public java.lang.Number getRecoveryEmailToken();
```

- *Type:* java.lang.Number

Lifetime in minutes of the recovery email token. Default: `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#recovery_email_token PolicyPassword#recovery_email_token}

---

##### `skipUnlock`<sup>Optional</sup> <a name="skipUnlock" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.skipUnlock"></a>

```java
public java.lang.Object getSkipUnlock();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When an Active Directory user is locked out of Okta, the Okta unlock operation should also attempt to unlock the user's Windows account.

Default: `false`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#skip_unlock PolicyPassword#skip_unlock}

---

##### `smsRecovery`<sup>Optional</sup> <a name="smsRecovery" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.smsRecovery"></a>

```java
public java.lang.String getSmsRecovery();
```

- *Type:* java.lang.String

Enable or disable SMS password recovery: `ACTIVE` or `INACTIVE`. Default: `INACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#sms_recovery PolicyPassword#sms_recovery}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyPassword.PolicyPasswordConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Policy Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.1/docs/resources/policy_password#status PolicyPassword#status}

---



