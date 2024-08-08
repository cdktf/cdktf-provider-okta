# `securityNotificationEmails` Submodule <a name="`securityNotificationEmails` Submodule" id="@cdktf/provider-okta.securityNotificationEmails"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityNotificationEmails <a name="SecurityNotificationEmails" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/security_notification_emails okta_security_notification_emails}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SecurityNotificationEmails(Construct Scope, string Id, SecurityNotificationEmailsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig">SecurityNotificationEmailsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig">SecurityNotificationEmailsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetReportSuspiciousActivityEnabled">ResetReportSuspiciousActivityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForFactorEnrollmentEnabled">ResetSendEmailForFactorEnrollmentEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForFactorResetEnabled">ResetSendEmailForFactorResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForNewDeviceEnabled">ResetSendEmailForNewDeviceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForPasswordChangedEnabled">ResetSendEmailForPasswordChangedEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetReportSuspiciousActivityEnabled` <a name="ResetReportSuspiciousActivityEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetReportSuspiciousActivityEnabled"></a>

```csharp
private void ResetReportSuspiciousActivityEnabled()
```

##### `ResetSendEmailForFactorEnrollmentEnabled` <a name="ResetSendEmailForFactorEnrollmentEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForFactorEnrollmentEnabled"></a>

```csharp
private void ResetSendEmailForFactorEnrollmentEnabled()
```

##### `ResetSendEmailForFactorResetEnabled` <a name="ResetSendEmailForFactorResetEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForFactorResetEnabled"></a>

```csharp
private void ResetSendEmailForFactorResetEnabled()
```

##### `ResetSendEmailForNewDeviceEnabled` <a name="ResetSendEmailForNewDeviceEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForNewDeviceEnabled"></a>

```csharp
private void ResetSendEmailForNewDeviceEnabled()
```

##### `ResetSendEmailForPasswordChangedEnabled` <a name="ResetSendEmailForPasswordChangedEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.resetSendEmailForPasswordChangedEnabled"></a>

```csharp
private void ResetSendEmailForPasswordChangedEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecurityNotificationEmails resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

SecurityNotificationEmails.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

SecurityNotificationEmails.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

SecurityNotificationEmails.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

SecurityNotificationEmails.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecurityNotificationEmails resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityNotificationEmails to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityNotificationEmails that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/security_notification_emails#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecurityNotificationEmails to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.reportSuspiciousActivityEnabledInput">ReportSuspiciousActivityEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorEnrollmentEnabledInput">SendEmailForFactorEnrollmentEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorResetEnabledInput">SendEmailForFactorResetEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForNewDeviceEnabledInput">SendEmailForNewDeviceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForPasswordChangedEnabledInput">SendEmailForPasswordChangedEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.reportSuspiciousActivityEnabled">ReportSuspiciousActivityEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorEnrollmentEnabled">SendEmailForFactorEnrollmentEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorResetEnabled">SendEmailForFactorResetEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForNewDeviceEnabled">SendEmailForNewDeviceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForPasswordChangedEnabled">SendEmailForPasswordChangedEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ReportSuspiciousActivityEnabledInput`<sup>Optional</sup> <a name="ReportSuspiciousActivityEnabledInput" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.reportSuspiciousActivityEnabledInput"></a>

```csharp
public object ReportSuspiciousActivityEnabledInput { get; }
```

- *Type:* object

---

##### `SendEmailForFactorEnrollmentEnabledInput`<sup>Optional</sup> <a name="SendEmailForFactorEnrollmentEnabledInput" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorEnrollmentEnabledInput"></a>

```csharp
public object SendEmailForFactorEnrollmentEnabledInput { get; }
```

- *Type:* object

---

##### `SendEmailForFactorResetEnabledInput`<sup>Optional</sup> <a name="SendEmailForFactorResetEnabledInput" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorResetEnabledInput"></a>

```csharp
public object SendEmailForFactorResetEnabledInput { get; }
```

- *Type:* object

---

##### `SendEmailForNewDeviceEnabledInput`<sup>Optional</sup> <a name="SendEmailForNewDeviceEnabledInput" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForNewDeviceEnabledInput"></a>

```csharp
public object SendEmailForNewDeviceEnabledInput { get; }
```

- *Type:* object

---

##### `SendEmailForPasswordChangedEnabledInput`<sup>Optional</sup> <a name="SendEmailForPasswordChangedEnabledInput" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForPasswordChangedEnabledInput"></a>

```csharp
public object SendEmailForPasswordChangedEnabledInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ReportSuspiciousActivityEnabled`<sup>Required</sup> <a name="ReportSuspiciousActivityEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.reportSuspiciousActivityEnabled"></a>

```csharp
public object ReportSuspiciousActivityEnabled { get; }
```

- *Type:* object

---

##### `SendEmailForFactorEnrollmentEnabled`<sup>Required</sup> <a name="SendEmailForFactorEnrollmentEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorEnrollmentEnabled"></a>

```csharp
public object SendEmailForFactorEnrollmentEnabled { get; }
```

- *Type:* object

---

##### `SendEmailForFactorResetEnabled`<sup>Required</sup> <a name="SendEmailForFactorResetEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForFactorResetEnabled"></a>

```csharp
public object SendEmailForFactorResetEnabled { get; }
```

- *Type:* object

---

##### `SendEmailForNewDeviceEnabled`<sup>Required</sup> <a name="SendEmailForNewDeviceEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForNewDeviceEnabled"></a>

```csharp
public object SendEmailForNewDeviceEnabled { get; }
```

- *Type:* object

---

##### `SendEmailForPasswordChangedEnabled`<sup>Required</sup> <a name="SendEmailForPasswordChangedEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.sendEmailForPasswordChangedEnabled"></a>

```csharp
public object SendEmailForPasswordChangedEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmails.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityNotificationEmailsConfig <a name="SecurityNotificationEmailsConfig" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SecurityNotificationEmailsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    object ReportSuspiciousActivityEnabled = null,
    object SendEmailForFactorEnrollmentEnabled = null,
    object SendEmailForFactorResetEnabled = null,
    object SendEmailForNewDeviceEnabled = null,
    object SendEmailForPasswordChangedEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/security_notification_emails#id SecurityNotificationEmails#id}. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.reportSuspiciousActivityEnabled">ReportSuspiciousActivityEnabled</a></code> | <code>object</code> | Notifies end users about suspicious or unrecognized activity from their account. Default is `true`. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForFactorEnrollmentEnabled">SendEmailForFactorEnrollmentEnabled</a></code> | <code>object</code> | Notifies end users of any activity on their account related to MFA factor enrollment. Default is `true`. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForFactorResetEnabled">SendEmailForFactorResetEnabled</a></code> | <code>object</code> | Notifies end users that one or more factors have been reset for their account. Default is `true`. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForNewDeviceEnabled">SendEmailForNewDeviceEnabled</a></code> | <code>object</code> | Notifies end users about new sign-on activity. Default is `true`. |
| <code><a href="#@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForPasswordChangedEnabled">SendEmailForPasswordChangedEnabled</a></code> | <code>object</code> | Notifies end users that the password for their account has changed. Default is `true`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/security_notification_emails#id SecurityNotificationEmails#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReportSuspiciousActivityEnabled`<sup>Optional</sup> <a name="ReportSuspiciousActivityEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.reportSuspiciousActivityEnabled"></a>

```csharp
public object ReportSuspiciousActivityEnabled { get; set; }
```

- *Type:* object

Notifies end users about suspicious or unrecognized activity from their account. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/security_notification_emails#report_suspicious_activity_enabled SecurityNotificationEmails#report_suspicious_activity_enabled}

---

##### `SendEmailForFactorEnrollmentEnabled`<sup>Optional</sup> <a name="SendEmailForFactorEnrollmentEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForFactorEnrollmentEnabled"></a>

```csharp
public object SendEmailForFactorEnrollmentEnabled { get; set; }
```

- *Type:* object

Notifies end users of any activity on their account related to MFA factor enrollment. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/security_notification_emails#send_email_for_factor_enrollment_enabled SecurityNotificationEmails#send_email_for_factor_enrollment_enabled}

---

##### `SendEmailForFactorResetEnabled`<sup>Optional</sup> <a name="SendEmailForFactorResetEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForFactorResetEnabled"></a>

```csharp
public object SendEmailForFactorResetEnabled { get; set; }
```

- *Type:* object

Notifies end users that one or more factors have been reset for their account. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/security_notification_emails#send_email_for_factor_reset_enabled SecurityNotificationEmails#send_email_for_factor_reset_enabled}

---

##### `SendEmailForNewDeviceEnabled`<sup>Optional</sup> <a name="SendEmailForNewDeviceEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForNewDeviceEnabled"></a>

```csharp
public object SendEmailForNewDeviceEnabled { get; set; }
```

- *Type:* object

Notifies end users about new sign-on activity. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/security_notification_emails#send_email_for_new_device_enabled SecurityNotificationEmails#send_email_for_new_device_enabled}

---

##### `SendEmailForPasswordChangedEnabled`<sup>Optional</sup> <a name="SendEmailForPasswordChangedEnabled" id="@cdktf/provider-okta.securityNotificationEmails.SecurityNotificationEmailsConfig.property.sendEmailForPasswordChangedEnabled"></a>

```csharp
public object SendEmailForPasswordChangedEnabled { get; set; }
```

- *Type:* object

Notifies end users that the password for their account has changed. Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.10.0/docs/resources/security_notification_emails#send_email_for_password_changed_enabled SecurityNotificationEmails#send_email_for_password_changed_enabled}

---



